import React, { useState } from 'react'
import { UsuarioService } from '../../services/UsuarioService'
import { Usuario } from '../../models/Usuario';

export const RegisterViewModel = () => {

  const { save } = new UsuarioService();

  const [message, setMessage] = useState('');
  const [values, setValues] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    password: '',
    confirmacionPassword: ''
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
      confirmacionPassword: ''
    })
  }

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value })
  }

  return {
    ...values,
    onChange,
    registrar,
    message
  }
}

export default RegisterViewModel;
