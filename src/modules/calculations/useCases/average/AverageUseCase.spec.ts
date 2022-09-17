import { CalculationsRepository } from "@modules/calculations/repositories/CalculationsRepository";
import { ICalculationsRepository } from "@modules/calculations/repositories/ICalculationsRepository";
import { AppError } from "@shared/errors/AppError";

import { AverageUseCase } from "./AverageUseCase";

let calculationsRepository: ICalculationsRepository;
let averageUseCase: AverageUseCase;

describe("Calculations", () => {
  beforeEach(() => {
    calculationsRepository = new CalculationsRepository();
    averageUseCase = new AverageUseCase(calculationsRepository);
  });

  it("should be calc two number average", async () => {
    const average = await averageUseCase.execute({ num1: 1.5, num2: 2 });
    expect(average).toBe(1.75);
  });

  it("should not be able to calc the average of two not numbers", async () => {
    await expect(
      averageUseCase.execute({ num1: 1, num2: "abc" as unknown as number })
    ).rejects.toEqual(new AppError("All numbers must me sent or be valid"));
  });
});
