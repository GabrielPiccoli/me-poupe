import { Router } from "express";

import { AverageController } from "@modules/calculations/useCases/average/AverageController";

const calculationsRoutes = Router();

const averageController = new AverageController();

calculationsRoutes.get("/average", averageController.handle);

export { calculationsRoutes };
