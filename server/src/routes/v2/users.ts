import { Router } from "express";
import {
  createUser,
  getUser,
  getUserById,
  getUsers,
} from "../../controllers/v2/users";
import { makeCallback } from "../../_libs";

const router = Router();

router.post("/", makeCallback(createUser));

router.get("/:id", makeCallback(getUserById));

router.get("/", makeCallback(getUsers));

router.get("/q?", makeCallback(getUser));

// router.put("/:id", updateUser);

// router.post("/login", login);

// router.post("/auth/requestResetPassword", requestResetPassword);

// router.get("/auth/resetPassword", (req, res) => {
//   console.log("req.query: ", req.query);
//   res.render("users/user", {
//     user: { token: req.query.token, userId: req.query.id },
//   });
// });

// router.post("/auth/resetPassword", resetPassword);

export default router;
