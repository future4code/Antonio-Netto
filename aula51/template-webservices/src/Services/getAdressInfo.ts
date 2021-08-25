import axios from "axios"
import { addressInfo } from "../types"

export const getAdressInfo = async (
    zipCode: string
):Promise<addressInfo | null> => {
    try {

    const response = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
    )

    return {
        rua: response.data.logradouro,
        bairro: response.data.bairro,
        cidade: response.data.localidade,
        estado: response.data.uf
    }

    } catch (error) {
        console.log(error)
        return null
    }

}