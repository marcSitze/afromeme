import { Router } from "express";

// routes
import accountRoutes from "./accounts";
import userRoutes from "./users";

const router = Router();

router.use("/accounts", accountRoutes);

router.use("/users", userRoutes);

export default router;
