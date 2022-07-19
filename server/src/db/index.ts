// import mongodb from 'mongodb'
import mongoose from 'mongoose';
import Todo from '../models/Todo';

export default async function makeDb (model: string) {
  let db: any;
  switch(String(model)) {
    case 'Todo':
      console.log('modelMakeDb: ', model)
      db = Todo;
      break;
    default:
      console.log('DefaultMakeDb: ', model)
      db = null;
  }

  return db;
}