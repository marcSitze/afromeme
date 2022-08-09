import { useController } from "../../../_libs";

import {
  createUser,
  find,
  findOne,
  findById,
  login,
  resetPassword,
  requestResetPassword,
} from "../../../models/v2/users/service";

import { makeCreateUser } from "./create-user";
import { makeGetUsers } from "./get";
import { makeGetById } from "./get-by-id";
import { makeGetUser } from "./get-user";
import { makeLogin } from "./login";
import { makeResetPassword } from "./reset-password";
import { makeRequestResetPassword } from "./req-reset-password";

const _createUser = makeCreateUser({ useController, createUser });

const getUserById = makeGetById({ useController, findById });

const getUser = makeGetUser({ useController, findOne });

const getUsers = makeGetUsers({ useController, find });

const _login = makeLogin({ useController, login });

const _resetPassword = makeResetPassword({ useController, resetPassword });
const _reqResetPassword = makeRequestResetPassword({
  useController,
  requestResetPassword,
});

export {
  _createUser as createUser,
  getUserById,
  getUser,
  getUsers,
  _login as login,
  _resetPassword as resetPassword,
  _reqResetPassword as requestResetPassword,
};
