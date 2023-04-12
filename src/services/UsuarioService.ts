import { AxiosError } from "axios";
import { ApiDelivery } from "../api/ApiDelivery";
import { Response } from "../api/Response";
import { Usuario } from "../models/Usuario";
import { FirebaseService } from "./FirebaseService";

export class UsuarioService {
    async saveWithImage(usuario: Usuario, image: Blob): Promise<Response<Usuario>> {
        try {
            const firebase = new FirebaseService();

           usuario.image = await firebase.saveProfileImage(image, usuario.usuarioId.toString());

            const response = await ApiDelivery.post<Response<Usuario>>('usuario', usuario);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError: Response<Usuario> = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }

    async save(usuario: Usuario): Promise<Response<Usuario>> {
        try {
            const firebase = new FirebaseService();

            const response = await ApiDelivery.post<Response<Usuario>>('usuario', usuario);
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
}