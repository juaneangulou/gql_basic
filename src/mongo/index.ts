import { MongoClient, Db, MongoClientOptions } from 'mongodb'
import config  from '../configurations'
import { connect } from 'http2';

const options: MongoClientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as MongoClientOptions;

export default class MongoLib {

    private client: MongoClient
    private dbName: any= config.dbName
    private mongoUri: any = config.mongoURL
    private static connection: Db
    /**
     *
     */
    constructor() {
        this.client = new MongoClient(this.mongoUri, options)
    }
    async connect() {
        if(!MongoLib.connection){
            try {
                await this.client.connect()
                MongoLib.connection = this.client.db(this.dbName)
                console.log('Connected successfully to mongo')
            } catch (error) {
                console.log(error)
            }
        }

        return MongoLib.connection
    }
}