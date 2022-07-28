import { Router } from "express";
import { makeCallback } from "../../_libs";

import {
  getAccount,
  getAccounts,
  updateAccount,
} from "../../controllers/v2/accounts";

const router = Router();

router.get("/:id", makeCallback(getAccount));

router.get("/", makeCallback(getAccounts));

router.put("/:id", makeCallback(updateAccount));

export default router;
