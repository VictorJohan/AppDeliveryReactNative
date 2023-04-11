import React, { useState } from 'react'
import { View, Modal, Alert, Pressable, Text, StyleSheet } from 'react-native';
import { RoundedButton } from './RoundedButton';

interface Props {
    openGaleria: () => void;
    openCamara: () => void;
    setModalUseState: React.Dispatch<React.SetStateAction<boolean>>;
    modalUseState: boolean;
}

export const ModalPickImage = ({ openCamara, openGaleria, setModalUseState, modalUseState }: Props) => {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalUseState}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalUseState(!modalUseState);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <View style={styles.buttonContainer}>
                            <RoundedButton text='Galeria' onPress={() => { openGaleria(); setModalUseState(false) }} />
                        </View>

                        <View style={styles.buttonContainer}>
                            <RoundedButton text='Camara' onPress={() => { openCamara();setModalUseState(false) }} />
                        </View>

                    </View>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 200,
        height: 170,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 5
    }
});
