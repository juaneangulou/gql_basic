import dotenv from 'dotenv'
dotenv.config();

const config = {
    port: process.env.PORT,
    mongoURL: process.env.MONGO_URI,
    dbName: process.env.DB_NAME,
}

export default config;