import { Router } from "express";

import { adressesRoutes } from "./adresses.routes";
import { calculationsRoutes } from "./calculations.routes";

const router = Router();

router.use("/calculations", calculationsRoutes);
router.use("/adresses", adressesRoutes);

export { router };
