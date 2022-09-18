import { container } from "tsyringe";

import { AdressesRepository } from "@modules/adresses/repositories/AdressesRepository";
import { IAdressesRepository } from "@modules/adresses/repositories/IAdressesRepository";
import { CalculationsRepository } from "@modules/calculations/repositories/CalculationsRepository";
import { ICalculationsRepository } from "@modules/calculations/repositories/ICalculationsRepository";

container.registerSingleton<ICalculationsRepository>(
  "CalculationsRepository",
  CalculationsRepository
);

container.registerSingleton<IAdressesRepository>(
  "AdressesRepository",
  AdressesRepository
);
