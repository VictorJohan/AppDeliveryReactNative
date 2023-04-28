import React from 'react'
import { Rol } from '../models/Rol'
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MyColors } from '../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

interface Props {
    rol: Rol,
    navigate: StackNavigationProp<RootStackParamList, 'RolScreen', undefined>
}

export const RolCard = ({ rol, navigate }: Props) => {
    return (
        <TouchableOpacity style={style.container} onPress={() => {
            switch (rol.nombre) {
                case 'RESTAURANTE':
                    navigate.replace('AdminTabsNavigator');
                    break;
                case 'CLIENTE':
                    navigate.replace('ClienteTabsNavigator');
                    break;
            }
        }}>

            <Image style={style.image} source={{ uri: rol.image }} />
            <View style={style.titleContainer}>
                <Text style={style.titulo}>{rol.nombre}</Text>
            </View>

        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        height: '100%',
        alignSelf: 'center',
        borderRadius: 20,
        borderColor: MyColors.primary,
        borderWidth: 2,
        marginBottom: 5,

    },
    titulo: {
        fontSize: 20,
        color: MyColors.textPrimary,
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'contain'
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        backgroundColor: MyColors.primary,
    }
})
