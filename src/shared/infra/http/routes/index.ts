import { Router } from "express";

import { calculationsRoutes } from "./calculations.routes";

const router = Router();

router.use("/calculations", calculationsRoutes);

export { router };
