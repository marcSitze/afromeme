import { Router } from "express";
import { makeCallback } from "../../_libs";

import {
  getAccount,
  getAccounts,
  updateAccount,
} from "../../controllers/v2/accounts";
import { auth } from "../../middlewares/auth/auth";

const router = Router();

router.use(auth);

router.get("/:id", makeCallback(getAccount));

router.get("/", makeCallback(getAccounts));

router.put("/:id", makeCallback(updateAccount));

export default router;
