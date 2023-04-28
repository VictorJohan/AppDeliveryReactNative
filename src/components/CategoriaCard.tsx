import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Categoria } from '../models/Categoria';

interface Props {
    categoria: Categoria
}

export const CategoriaCard = ({categoria}:Props) => {
    return (
        <View>
            <View style={[styles.shadow, styles.card]}>
                <View style={styles.imagenContainer}>
                    <Image style={styles.imagen} source={{ uri: categoria.imagen }} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titulo}>{categoria.nombre}</Text>
                    <Text style={styles.descripcion}>{categoria.descripcion}</Text>
                </View>
                <View style={styles.accionesContainer}>
                    <TouchableOpacity>
                        <Image style={styles.iconAccion} source={require('../../assets/edit.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
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
    },
    shadow: {
        shadowColor: 'red',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
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
    }
})