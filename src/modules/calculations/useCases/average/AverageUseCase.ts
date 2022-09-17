import { inject, injectable } from "tsyringe";

import { ICalculationsRepository } from "@modules/calculations/repositories/ICalculationsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  num1: number;
  num2: number;
}

@injectable()
class AverageUseCase {
  constructor(
    @inject("CalculationsRepository")
    private calculationsRepository: ICalculationsRepository
  ) {}

  async execute({ num1, num2 }: IRequest): Promise<number> {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new AppError("All numbers must me sent or be valid");
    }

    const average = this.calculationsRepository.average(num1, num2);

    return average;
  }
}

export { AverageUseCase };
