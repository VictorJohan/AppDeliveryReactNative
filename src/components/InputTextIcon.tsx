import React from 'react'
import { View, TextInput, Image, StyleSheet, KeyboardType } from 'react-native'

interface Props {
    icon: any;
    value: string;
    placeholder: string;
    keyboardType: KeyboardType;
    secureTextEntry?: boolean;
    property: string;
    onChangeText: (property: string, value: any) => void;
}

export const InputTextIcon = ({icon, placeholder, keyboardType, secureTextEntry=false, value, onChangeText, property}: Props) => {
    return (
        <View style={styles.formTextInput}>
            <Image style={styles.inputIcon} source={icon} />
            <TextInput onChangeText={text => onChangeText(property, text)} value={value} style={styles.textInput} placeholder={placeholder} keyboardType={keyboardType} secureTextEntry={secureTextEntry}/>
        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginLeft: 10,
    },
    formTextInput: {
        flexDirection: 'row',
        marginTop: 30,
    },
    inputIcon: {
        width: 25,
        height: 25,
        marginTop: 5,
    }
})