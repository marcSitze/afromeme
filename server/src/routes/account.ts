import * as express from "express";
import {
  getAccount,
  getAccounts,
  updateAccount,
  getAccountsByQuery,
} from "../controllers/account";
import { auth } from "../middlewares/auth/auth";
const router = express.Router();

router.use(auth);

router.get("/:id", getAccount);

router.get("/", getAccounts);

router.put("/:id", updateAccount);

router.get("/query/q?", getAccountsByQuery);

export default router;
