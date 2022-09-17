import { container } from "tsyringe";

import { CalculationsRepository } from "@modules/calculations/repositories/CalculationsRepository";
import { ICalculationsRepository } from "@modules/calculations/repositories/ICalculationsRepository";

container.registerSingleton<ICalculationsRepository>(
  "CalculationsRepository",
  CalculationsRepository
);
