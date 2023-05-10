import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { Categoria } from '../models/Categoria';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import useViewModelCategoria from '../views/admin/category/ViewModel'

interface Props {
    categoria: Categoria,
    lista: Categoria[],
}

export const CategoriaCard = ({ categoria, lista }: Props) => {

    const navigate = useNavigation<StackNavigationProp<RootStackParamList>>()

    const { eliminarCategoria } = useViewModelCategoria()

    const eliminarCategoriaAlert = () =>
        Alert.alert(`Eliminar la categoria ${categoria.nombre}`, '¿Seguro que desea eliminar esta categoria?', [
            {
                text: 'Cancel',
                onPress: () => { },
                style: 'cancel',
            },
            {
                text: 'Sí', onPress: async () => {
                    if (await eliminarCategoria(categoria.categoriaId)) {
                        const index = lista.findIndex(item => item.categoriaId === categoria.categoriaId)
                        lista.splice(index, 1)
                    }
                }
            },
        ]);

    return (
        <View>
            <View style={[styles.card]}>
                <View style={styles.imagenContainer}>
                    <Image style={styles.imagen} source={{ uri: categoria.imagen }} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titulo}>{categoria.nombre}</Text>
                    <Text style={styles.descripcion}>{categoria.descripcion}</Text>
                </View>
                <View style={styles.accionesContainer}>
                    <TouchableOpacity onPress={() => { navigate.navigate('CategoriaScreen', { id: categoria.categoriaId }) }}>
                        <Image style={styles.iconAccion} source={require('../../assets/edit.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { eliminarCategoriaAlert() }}>
                        <Image style={styles.iconAccion} source={require('../../assets/trash.png')} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%',
        height: 115,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 1,
    },

    imagenContainer: {
        width: '30%',
        height: '100%',
        padding: 5,
    },
    imagen: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    descripcion: {
        fontSize: 12,

    },
    textContainer: {
        width: '55%',
        padding: 2,
    },
    accionesContainer: {
        width: '15%',
        alignItems: 'center',
    },
    iconAccion: {
        width: 35,
        height: 35,
        marginTop: 15,
    },


})