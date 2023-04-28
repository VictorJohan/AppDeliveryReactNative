import { useState } from "react"
import { Categoria } from "../../../models/Categoria"
import * as ImagePicker from 'expo-image-picker';
import { CategoriaService } from "../../../services/CategoriasService";
import { UsuarioService } from "../../../services/UsuarioService";

const CategoriaViewModel = () => {

  const [categoria, setCategoria] = useState(new Categoria());
  const [message, setMessage] = useState('');
  const { save,UpdateImageCategoria } = new CategoriaService();
  


  const onChange = (property: string, value: any) => {
    setCategoria({ ...categoria, [property]: value });
  }

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange('imagen', result!.assets![0].uri);

    }

  };

  const takePhoto = async () => {

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange('imagen', result!.assets![0].uri);
    }

  };

  const guardar = async () => {
    if (validar()) {
      const response = await save(categoria);
      if (response.success) {
        setMessage('Se guardó correctamente');
        setCategoria(new Categoria());
        await UpdateImageCategoria(response.data!)
      } else {
        setMessage(response.message);
      }
    }
  }

  const validar = () => {
    if (!categoria.nombre) {
      setMessage('El nombre es requerido');
      return false;
    }
    if (!categoria.descripcion) {
      setMessage('La descripción es requerida');
      return false;
    }
    if (!categoria.imagen) {
      setMessage('La imagen es requerida');
      return false;
    }
    return true;
  }


  return {
    ...categoria,
    setCategoria,
    onChange,
    pickImage,
    takePhoto,
    guardar,
    message
  }
}

export default CategoriaViewModel