import { ICalculationsRepository } from "./ICalculationsRepository";

class CalculationsRepository implements ICalculationsRepository {
  average(num1: number, num2: number): number {
    const sum = num1 + num2;
    const division = sum / 2;
    const result = Math.round((division + Number.EPSILON) * 100) / 100;

    return result;
  }
}

export { CalculationsRepository };
