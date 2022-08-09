import { UserDocument } from "../../../interfaces/models/UserDocument";
import { User } from "../../Users";

const insert = async (data: UserDocument) => {
  const user = new User(data);

  return user.save();
};

export default { ...User, insert };
