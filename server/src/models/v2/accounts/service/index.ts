import { ApiError } from "../../../../_libs";

import accountDb from "../db";

import { makeCreateAccount } from "./create-account";
import { makeFindOne } from "./find-one";
import { makeGetAccounts } from "./get-accounts";
import { makeGetById } from "./get-by-id";
import { makeUpdateAccount } from "./update-account";

const createAccount = makeCreateAccount({ accountDb });

const getAccounts = makeGetAccounts({ accountDb });

const findOne = makeFindOne({ accountDb });

const getAccountById = makeGetById({ accountDb });

const updateAccount = makeUpdateAccount({ accountDb, ApiError });

export { createAccount, findOne, getAccountById, getAccounts, updateAccount };
