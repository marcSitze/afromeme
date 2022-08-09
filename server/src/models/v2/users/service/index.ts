import bcrypt from "bcrypt";
import crypto from "crypto";

import { sanitize } from "../../../../_libs";

import config from "../../../../config";
import { EmailService } from "../../../../services/email.service";
import tokenDb from "../../../../models/Token";
import userDb from "../db";
import {
  encryptPassword,
  generateToken,
  verifyPassword,
} from "../../../../common/auth";

const emailService = new EmailService();

import { makeCreateUser } from "./create-user";
import { makeFindOne } from "./find-one";
import { makeFindById } from "./find-by-id";
import { makeFind } from "./find";
import { makeUpdate } from "./update";
import { makeLogin } from "./login";
import { makeResetPassword } from "./reset-password";
import { makeRequestResetPassword } from "./req-reset-password";

const createUser = makeCreateUser({ encryptPassword, userDb });
const findOne = makeFindOne({ userDb });
const findById = makeFindById({ userDb });
const find = makeFind({ userDb, sanitize });
const login = makeLogin({ generateToken, userDb, verifyPassword });

const resetPassword = makeResetPassword({
  bcrypt,
  config,
  emailService,
  tokenDb,
  userDb,
});
const requestResetPassword = makeRequestResetPassword({
  bcrypt,
  config,
  crypto,
  emailService,
  tokenDb,
  userDb,
});

const updateUser = makeUpdate({ userDb });

export {
  createUser,
  find,
  findOne,
  findById,
  login,
  resetPassword,
  requestResetPassword,
  updateUser,
};
