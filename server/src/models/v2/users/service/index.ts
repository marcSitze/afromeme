import { sanitize } from "../../../../_libs";

import userDb from "../db";
import { encryptPassword } from "../../../../common/auth";

import { makeCreateUser } from "./create-user";
import { makeFindOne } from "./find-one";
import { makeFindById } from "./find-by-id";
import { makeFind } from "./find";
import { makeUpdate } from "./update";

const createUser = makeCreateUser({ encryptPassword, userDb });
const findOne = makeFindOne({ userDb });
const findById = makeFindById({ userDb });
const find = makeFind({ userDb, sanitize });
const updateUser = makeUpdate({ userDb });

export { createUser, find, findOne, findById, updateUser };
