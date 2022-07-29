import { useController } from "../../../_libs";

import {
  findOne,
  getAccounts,
  updateAccount,
} from "../../../models/v2/accounts/service";

import { makeGet } from "./get";
import { makeGetMany } from "./get-many";
import { makePut } from "./put";

const getAccount = makeGet({ findOne, useController });

const _getAccounts = makeGetMany({ getAccounts, useController });

const _updateAccount = makePut({ updateAccount, useController });

export {
  getAccount,
  _getAccounts as getAccounts,
  _updateAccount as updateAccount,
};
