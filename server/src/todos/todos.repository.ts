import mongoose from "mongoose";
import makeTodo from "./todo.entity";

export default function makeTodosRepository ({ database }: any) {
  return Object.freeze({
    add,
    getTodos,
    remove,
  });

  async function add (todo: { message: string, done: boolean}) {
    const db = await database;
    const result = await db.save(makeTodo(todo));

    return {
      success: true,
      created: result,
    }
  }

  async function getTodos() {
    const db = await database;
    const result = await db.find({});

    return {
      success: true,
      todos: result,
    }
  }
  async function remove () {}
}