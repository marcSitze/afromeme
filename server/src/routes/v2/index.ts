import { Router } from "express";

// routes
import accountRoutes from "./accounts";

const router = Router();

router.use("/accounts", accountRoutes);

export default router;
