import { sanitize } from "../../../../_libs";

import userDb from "../db";
import {
  encryptPassword,
  generateToken,
  verifyPassword,
} from "../../../../common/auth";

import { makeCreateUser } from "./create-user";
import { makeFindOne } from "./find-one";
import { makeFindById } from "./find-by-id";
import { makeFind } from "./find";
import { makeUpdate } from "./update";
import { makeLogin } from "./login";

const createUser = makeCreateUser({ encryptPassword, userDb });
const findOne = makeFindOne({ userDb });
const findById = makeFindById({ userDb });
const find = makeFind({ userDb, sanitize });
const login = makeLogin({ generateToken, userDb, verifyPassword });
const updateUser = makeUpdate({ userDb });

export { createUser, find, findOne, findById, login, updateUser };
