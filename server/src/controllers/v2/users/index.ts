import { useController } from "../../../_libs";

import {
  createUser,
  find,
  findOne,
  findById,
  updateUser,
} from "../../../models/v2/users/service";

import { makeGetUsers } from "./get";
import { makeGetById } from "./get-by-id";
import { makeGetUser } from "./get-user";

const getUserById = makeGetById({ useController, findById });

const getUser = makeGetUser({ useController, findOne });

const getUsers = makeGetUsers({ useController, find });

export { getUserById, getUser, getUsers };
