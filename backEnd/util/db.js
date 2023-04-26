import { MongoClient } from 'mongodb'

const URI = prozess.env.MONGO_URI
const DB = prozess.env.MONGO_DB

const client = new MongoClient(URI)

let db 

export const getDb = async () => {
    if (db) {
        return db
    } else {
        await client.connect()
        db = client.db(DB)
        return db
    }
}