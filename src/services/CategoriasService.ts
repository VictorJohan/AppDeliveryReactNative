import { AxiosError } from "axios";
import { ApiDelivery } from "../api/ApiDelivery";
import { Categoria } from "../models/Categoria";
import { Response } from "../api/Response";
import { FirebaseManager } from "../utils/Firebase";

export class CategoriaService {

    async save(Categoria: Categoria): Promise<Response<Categoria>> {
        try {
            const response = await ApiDelivery.post<Response<Categoria>>('categoria', Categoria);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError: Response<Categoria> = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }

    async list(): Promise<Response<Categoria[]>> {
        try {
            const response = await ApiDelivery.get<Response<Categoria[]>>('categoria');
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError: Response<Categoria[]> = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }

    async get(id: number): Promise<Response<Categoria>> {
        try {
            const response = await ApiDelivery.get<Response<Categoria>>(`categoria/${id}`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError: Response<Categoria> = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }
    async deleteCategoria(id: number): Promise<Response<Categoria>> {
        try {
            console.log(id);
            const response = await ApiDelivery.delete<Response<Categoria>>(`categoria/${id}`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError: Response<Categoria> = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }

    async UpdateImageCategoria(categoria: Categoria): Promise<Response<Categoria>> {
        try {
            
            const {uploadImageCategoria} = FirebaseManager();
            categoria.imagen = await uploadImageCategoria(categoria.imagen, categoria.categoriaId.toString());

            const response = await ApiDelivery.post<Response<Categoria>>('categoria/UpdateImagen', categoria);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            const apiError: Response<Categoria> = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }
}