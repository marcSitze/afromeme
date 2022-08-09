import { Router } from "express";
import {
  createUser,
  getUserById,
  getUsers,
  login,
  requestResetPassword,
  resetPassword,
} from "../../controllers/v2/users";
import { makeCallback } from "../../_libs";

const router = Router();

router.post("/", makeCallback(createUser));

router.get("/:id", makeCallback(getUserById));

router.get("/", makeCallback(getUsers));

// router.get("/q?", makeCallback(getUser));

// router.put("/:id", updateUser);

router.post("/login", makeCallback(login));

router.post("/auth/requestResetPassword", makeCallback(requestResetPassword));

router.post("/auth/resetPassword", makeCallback(resetPassword));

export default router;
