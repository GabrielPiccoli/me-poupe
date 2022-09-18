import { inject, injectable } from "tsyringe";

import { IAddressDTO } from "@modules/adresses/dtos/IAddressDTO";
import { IAdressesRepository } from "@modules/adresses/repositories/IAdressesRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class GetByCepUseCase {
  constructor(
    @inject("AdressesRepository")
    private adressesRepository: IAdressesRepository
  ) {}

  async execute(cep: string): Promise<IAddressDTO> {
    const cepTreated = cep.replace(/[^0-9]/gi, "");
    try {
      const adresses = await this.adressesRepository.findByCep(cepTreated);

      return {
        ...adresses,
        bairro:
          adresses.bairro === "" ? "Bairro não encontrado" : adresses.bairro,
      };
    } catch {
      throw new AppError("Invalid zip code");
    }
  }
}

export { GetByCepUseCase };
