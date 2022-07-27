import { Router } from "express";
import {
  getAccount,
  getAccounts,
  updateAccount,
} from "../../controllers/v2/accounts";

const router = Router();

router.get("/:id", getAccount);

router.get("/", getAccounts);

router.put("/:id", updateAccount);

export default router;
