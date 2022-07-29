import { Document } from "mongoose";
import { IBio } from "../../../interfaces/account/bio.interface";

export interface IAccount extends Document {
  _id: string;
  user: string;
  location: string;
  posts: string[];
  followers: string[];
  bio: IBio;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
