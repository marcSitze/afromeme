import { CreateUserDTO } from "../../../../dto/user.dto";

export function makeCreateUser({ encryptPassword, userDb }: any) {
  return async (user: CreateUserDTO) => {
    user.password = await encryptPassword(user.password);

    return userDb.insert(user);
  };
}
