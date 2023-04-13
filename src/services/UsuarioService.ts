import { AxiosError } from "axios";
import { ApiDelivery } from "../api/ApiDelivery";
import { Response } from "../api/Response";
import { Usuario } from "../models/Usuario";
import { FirebaseManager } from "../utils/Firebase";
import { LocalData } from "../data/LocalData";

const {set, get} = LocalData();

export class UsuarioService {
   
    

    async save(usuario: Usuario): Promise<Response<Usuario>> {
        try {
            const response = await ApiDelivery.post<Response<Usuario>>('usuario', usuario);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError: Response<Usuario> = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }

    async UpdateImageProfile(usuario: Usuario): Promise<Response<Usuario>> {
        try {
            
            const {uploadImageProfile} = FirebaseManager();
            usuario.image = await uploadImageProfile(usuario.image, usuario.usuarioId.toString());

            const response = await ApiDelivery.post<Response<Usuario>>('usuario/UpdateImageProfile', usuario);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError: Response<Usuario> = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }

    async login(usuario: Usuario): Promise<Response<Usuario>> {
        try {
            const response = await ApiDelivery.post<Response<Usuario>>('usuario/login', usuario);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError: Response<Usuario> = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }

    async setLocalUsuario(usuario: Usuario): Promise<void> {
        return set('usuario', JSON.stringify(usuario));
    }

    async getLocalUsuario(): Promise<Usuario> {
        const usuario = await get('usuario') as string;
        return JSON.parse(usuario);
    }
}