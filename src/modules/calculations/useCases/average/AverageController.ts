import { Request, Response } from "express";
import { container } from "tsyringe";

import { AverageUseCase } from "./AverageUseCase";

class AverageController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { num1, num2 } = req.body;
    const averageUseCase = container.resolve(AverageUseCase);
    const average = await averageUseCase.execute({ num1, num2 });

    return res.json(average);
  }
}

export { AverageController };
