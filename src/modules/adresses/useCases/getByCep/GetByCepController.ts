import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetByCepUseCase } from "./GetByCepUseCase";

class GetByCepController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { cep } = req.params;
    const getByCepUseCase = container.resolve(GetByCepUseCase);
    const address = await getByCepUseCase.execute(cep);

    return res.json(address);
  }
}

export { GetByCepController };
