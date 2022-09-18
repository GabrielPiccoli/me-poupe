import { AdressesRepository } from "@modules/adresses/repositories/AdressesRepository";
import { IAdressesRepository } from "@modules/adresses/repositories/IAdressesRepository";
import { AppError } from "@shared/errors/AppError";

import { GetByCepUseCase } from "./GetByCepUseCase";

let adressesRepository: IAdressesRepository;
let getByCepUseCase: GetByCepUseCase;

describe("Adresses", () => {
  beforeEach(() => {
    adressesRepository = new AdressesRepository();
    getByCepUseCase = new GetByCepUseCase(adressesRepository);
  });

  it("should be able to get a address by cep", async () => {
    const adresses = await getByCepUseCase.execute("13417530");
    expect(adresses).toHaveProperty("bairro");
  });

  it("should be able to get a address by cep and show there's no bairro found", async () => {
    const adresses = await getByCepUseCase.execute("18150000");
    expect(adresses.bairro).toBe("Bairro não encontrado");
  });

  it("should not be able to get an invalid cep", async () => {
    await expect(getByCepUseCase.execute("321651651")).rejects.toEqual(
      new AppError("Invalid zip code")
    );
  });
});
