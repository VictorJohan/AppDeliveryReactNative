import React, { useState } from 'react'
import { UsuarioService } from '../../services/UsuarioService'
import { Usuario } from '../../models/Usuario';
import * as ImagePicker from 'expo-image-picker';

export const RegisterViewModel = () => {

  const { save } = new UsuarioService();

  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
  
    if(!result.canceled){
      onChange('image', result!.assets![0].uri);
      setFile(result!.assets![0]);
    }
    
  };

  const [message, setMessage] = useState('');
  const [values, setValues] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    password: '',
    confirmacionPassword: '',
    image: ''
  })

  const registrar = async () => {
    if (isValidForm()) {
      const response = await save(new Usuario(values));
      if (response.success) {
        setMessage(response.message);
        limpiar();
      }
    }
  }

  const isValidForm = (): boolean => {
    if (values.nombres === '') {
      setMessage('Ingresa tu nombre');
      return false;
    }
    if (values.apellidos === '') {
      setMessage('Ingresa tu apellido');
      return false;
    }
    if (values.correo === '') {
      setMessage('Ingresa tu correo electronico');
      return false;
    }
    if (values.telefono === '') {
      setMessage('Ingresa tu telefono');
      return false;
    }
    if (values.password === '') {
      setMessage('Ingresa la contraseña');
      return false;
    }
    if (values.confirmacionPassword === '') {
      setMessage('Ingresa la confirmacion de la contraseña');
      return false;
    }
    if (values.password !== values.confirmacionPassword) {
      setMessage('Las contraseñas no coinciden');
      return false;
    }

    return true;
  }

  const limpiar = () => {
    setValues({
      nombres: '',
      apellidos: '',
      correo: '',
      telefono: '',
      password: '',
      confirmacionPassword: '',
      image: ''
    })
  }

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value })
  }

  return {
    ...values,
    onChange,
    registrar,
    message,
    pickImage
  }
}

export default RegisterViewModel;
