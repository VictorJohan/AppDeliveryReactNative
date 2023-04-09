import React, { useState } from 'react'
import { UsuarioService } from '../../services/UsuarioService';
import { Usuario } from '../../models/Usuario';

export const HomeViewModel = () => {

    const {login} = new UsuarioService();

    const [message, setMessage] = useState('');
    const [values, setValues] = useState({
        correo: '',
        password: ''
    })

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const ingresar = async () => {
        if (validarForm()) {
            const response = await login(new Usuario(values));
            if (response.success) {
                setMessage(response.message);
            }else{
                setMessage(response.message);
            }
        }
    }

    const validarForm = () => {
        if (values.correo === '') {
            setMessage('Ingresa tu correo electronico');
            return false;
        }
        if (values.password === '') {
            setMessage('Ingresa la contraseña');
            return false;
        }
        return true;
    }

    return {
        ...values, 
        onChange,
        ingresar,
        message
    }
}

export default HomeViewModel
