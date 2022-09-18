import { IAddressDTO } from "../dtos/IAddressDTO";

interface IAdressesRepository {
  findByCep(cep: string): Promise<IAddressDTO>;
}

export { IAdressesRepository };
