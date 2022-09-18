import { Router } from "express";

import { GetByCepController } from "@modules/adresses/useCases/getByCep/GetByCepController";

const adressesRoutes = Router();

const getByCepController = new GetByCepController();

adressesRoutes.get("/cep/:cep", getByCepController.handle);

export { adressesRoutes };
