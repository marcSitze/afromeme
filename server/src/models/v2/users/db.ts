import mongoose, { Schema } from "mongoose";
import { IUser } from "./IUser";

const userSchema: Schema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);
