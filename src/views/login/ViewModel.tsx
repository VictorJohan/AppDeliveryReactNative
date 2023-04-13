import React, { useState } from 'react'
import { UsuarioService } from '../../services/UsuarioService';
import { Usuario } from '../../models/Usuario';
import { LocalData } from '../../data/LocalData';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';


export const LoginViewModel = () => {

    const {login, setLocalUsuario} = new UsuarioService();

    const navigate = useNavigation<StackNavigationProp<RootStackParamList>>()

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
                setLocalUsuario(response.data!);
                setMessage(response.message);
                navigate.navigate('ProfileInfoScreen');
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

export default LoginViewModel
