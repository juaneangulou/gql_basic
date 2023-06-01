import { MongoClient, Db, MongoClientOptions } from 'mongodb'
import config from '../config';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as MongoClientOptions;
  
export default class MongoLib {
    private client: MongoClient
    private dbName: any= config.dbName;
    private mongoUri: any= config.mongoUrl;
    private static connection: Db
    /**
     *
     */
    
    constructor() {
        this.client = new MongoClient(this.mongoUri, options)
    }
    async connect() {
        if (!MongoLib.connection) {
            try {
                await this.client.connect()
                console.log('Connected successfully to mongo');
                MongoLib.connection = this.client.db(this.dbName)
            } catch (error) {
                console.log(error);
            }
        }
        return MongoLib.connection
    }
}