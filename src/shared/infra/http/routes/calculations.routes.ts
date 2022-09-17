import { Router } from "express";

import { AverageController } from "@modules/calculations/useCases/average/AverageController";

const calculationsRoutes = Router();

const averageController = new AverageController();

calculationsRoutes.post("/average", averageController.handle);

export { calculationsRoutes };
