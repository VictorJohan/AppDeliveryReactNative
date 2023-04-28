import React from 'react'
import { CategoriaService } from '../../../../services/CategoriasService';
import { Categoria } from '../../../../models/Categoria';

const ViewModelCategoriaList = () => {

    const { list } = new CategoriaService();

    const [categorias, setCategorias] = React.useState(Array<Categoria>());

    const getCategorias = async () => {
        const response = await list();
        if (response.success) {
            setCategorias(response.data!);
            console.log(response.data);
        }
    }

    return {
        categorias,
        getCategorias
    }
}

export default ViewModelCategoriaList
