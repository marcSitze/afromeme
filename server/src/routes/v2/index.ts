import { Router } from "express";

// routes
import accountRoutes from "./accounts";

const router = Router();

router.get("/accounts", accountRoutes);

export default router;
