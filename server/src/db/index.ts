// import mongodb from 'mongodb'
import mongoose from 'mongoose';
import Todo from '../models/Todo';

export default async function makeDb (model: string) {
  // const MongoClient = mongodb.MongoClient
  // const url = 'mongodb://localhost:27017'
  // const dbName = 'mm_api_demo'
  // const client = new MongoClient(url, { useNewUrlParser: true })
  // await client.connect()
  let db: any;
  console.log('modelMakeDb: ', model)
  // const db = mongoose.model(model, new mongoose.Schema({ message: String, done: Boolean }));
  switch(String(model)) {
    case String('Todo'):
      db = Todo;
    default:
      db = null;
  }
  // const db = await client.db(dbName)
  // db.makeId = makeIdFromString
  return db;
}
// function makeIdFromString (id) {
//   return new mongodb.ObjectID(id)
// }
