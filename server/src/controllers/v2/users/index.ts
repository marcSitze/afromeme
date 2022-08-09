import { useController } from "../../../_libs";

import {
  createUser,
  find,
  findOne,
  findById,
  login,
  updateUser,
} from "../../../models/v2/users/service";

import { makeCreateUser } from "./create-user";
import { makeGetUsers } from "./get";
import { makeGetById } from "./get-by-id";
import { makeGetUser } from "./get-user";
import { makeLogin } from "./login";

const _createUser = makeCreateUser({ useController, createUser });

const getUserById = makeGetById({ useController, findById });

const getUser = makeGetUser({ useController, findOne });

const getUsers = makeGetUsers({ useController, find });

const _login = makeLogin({ useController, login });

export {
  _createUser as createUser,
  getUserById,
  getUser,
  getUsers,
  _login as login,
};
