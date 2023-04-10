import React from 'react'
import { useUsuario } from '../../../hooks/useUsuario'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { LocalData } from '../../../data/LocalData';

export const ProfileInfoViewModel = () => {

    const { remove } = LocalData();
   
    const navigate = useNavigation<StackNavigationProp<RootStackParamList>>()

    const cerrarSession = async () => {
        navigate.navigate('LoginScreen');
        await remove('usuario');
    }

    return {
        cerrarSession
    }
}

export default ProfileInfoViewModel