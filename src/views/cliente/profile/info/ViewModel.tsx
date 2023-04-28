import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import { LocalData } from '../../../../data/LocalData';
import { UsuarioService } from '../../../../services/UsuarioService';
import * as ImagePicker from 'expo-image-picker';
import { useUsuario } from '../../../../hooks/useUsuario';
import { Usuario } from '../../../../models/Usuario';


export const ProfileInfoViewModel = () => {
    const navigate = useNavigation<StackNavigationProp<RootStackParamList>>()

    const { usuario } = useUsuario();

    const { remove } = LocalData();
    const { save, UpdateImageProfile, setLocalUsuario } = new UsuarioService();
    const [isLoading, setIsLoading] = useState(false);

    const [message, setMessage] = useState('');

    const [values, setValues] = useState({
        usuarioId: 0,
        nombres: '',
        apellidos: '',
        correo: '',
        telefono: '',
        password: '',
        confirmacionPassword: '',
        image: ''
    })

    const cargarInformacion = () => {
        if (usuario) {
            setValues({
                usuarioId: usuario.usuarioId,
                nombres: usuario.nombres,
                apellidos: usuario.apellidos,
                correo: usuario.correo,
                telefono: usuario.telefono,
                password: usuario.password,
                confirmacionPassword: usuario.password,
                image: usuario.image
            })
        }
    }

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            onChange('image', result!.assets![0].uri);
            usuario!.image = result!.assets![0].uri;
            setLocalUsuario(usuario!);
            UpdateImageProfile(usuario!);
        }

    };

    const takePhoto = async () => {

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            onChange('image', result!.assets![0].uri);
            usuario!.image = result!.assets![0].uri;
            setLocalUsuario(usuario!);
            UpdateImageProfile(usuario!);
        }

    };

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

    const actualizar = async () => {

        setIsLoading(true);
        const usuario = await save(new Usuario(values));
        if (usuario) {
            setMessage('Informacion actualizada correctamente');
        } else {
            setMessage('Error al actualizar la informacion');
        }
        setIsLoading(false);

    }

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const cerrarSession = async () => {
        navigate.replace('LoginScreen');
        await remove('usuario');
    }

    return {
        cerrarSession,
        ...values,
        onChange,
        message,
        pickImage,
        takePhoto,
        isLoading,
        setIsLoading,
        cargarInformacion,
        usuario,
        actualizar
    }
}

export default ProfileInfoViewModel