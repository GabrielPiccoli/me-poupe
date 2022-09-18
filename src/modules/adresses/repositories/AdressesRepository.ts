import axios from "axios";

import { IAddressDTO } from "../dtos/IAddressDTO";
import { IAdressesRepository } from "./IAdressesRepository";

class AdressesRepository implements IAdressesRepository {
  async findByCep(cep: string): Promise<IAddressDTO> {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    const address = response.data;

    return address;
  }
}

export { AdressesRepository };
