import { User as userDb } from "../db";
import { encryptPassword } from "../../../../common/auth";

import { makeCreateUser } from "./create-user";
import { makeFindOne } from "./find-one";
import { makeGetById } from "./get-user-by-id";
import { makeGetUsers } from "./get-users";
import { makeUpdate } from "./update";

const createUser = makeCreateUser({ encryptPassword, userDb });
const findOne = makeFindOne({ userDb });
const getUserById = makeGetById({ userDb });
const getUsers = makeGetUsers({ userDb });
const updateUser = makeUpdate({ userDb });

export default { createUser, findOne, getUserById, getUsers, updateUser };
