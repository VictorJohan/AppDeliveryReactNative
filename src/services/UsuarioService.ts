import { AxiosError } from "axios";
import { ApiDelivery } from "../api/ApiDelivery";
import { Response } from "../api/Response";
import { Usuario } from "../models/Usuario";

export class UsuarioService{
    async save(usuario: Usuario): Promise<Response<Usuario>>{
        try {
            const response = await ApiDelivery.post<Response<Usuario>>('usuario', usuario);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError:Response<Usuario> = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
    }

    async login(usuario: Usuario): Promise<Response<Usuario>>{
        try {
            const response = await ApiDelivery.post<Response<Usuario>>('usuario/login', usuario);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError:Response<Usuario> = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError)
        }
    }
}