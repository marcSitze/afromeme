import * as mongoose from "mongoose";
import { IAccount } from "./IAccount";

const profileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    location: { type: String },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    bio: { type: String },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    social: {
      youtube: { type: String },
      twitter: { type: String },
      facebook: { type: String },
      instagram: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model<IAccount>("Account_v2", profileSchema);
