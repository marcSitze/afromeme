import { useController } from "../../../_libs";

import AccountService from "../../../services/account.service";

import { makeGet } from "./get";
import { makeGetMany } from "./get-many";
import { makePut } from "./put";

const accountService = new AccountService();

const getAccount = makeGet({ accountService, useController });

const getAccounts = makeGetMany({ accountService, useController });

const updateAccount = makePut({ accountService, useController });

export { getAccount, getAccounts, updateAccount };
