// import mongodb from 'mongodb'
import mongoose from 'mongoose';

export default async function makeDb (model: string) {
  // const MongoClient = mongodb.MongoClient
  // const url = 'mongodb://localhost:27017'
  // const dbName = 'mm_api_demo'
  // const client = new MongoClient(url, { useNewUrlParser: true })
  // await client.connect()
  const db = mongoose.model(model, new mongoose.Schema({ message: String, done: Boolean }));
  // const db = await client.db(dbName)
  // db.makeId = makeIdFromString
  return db;
}
// function makeIdFromString (id) {
//   return new mongodb.ObjectID(id)
// }
