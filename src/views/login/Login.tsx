import { Text, View, Image, TextInput, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import useViewModel from './ViewModel';
import { InputTextIcon } from '../../components/InputTextIcon';
import { styles } from './LoginStyles';
import { useEffect } from 'react';
import { useUsuario } from '../../hooks/useUsuario';

export const LoginScreen = () => {

    const { correo, password, message, onChange, ingresar } = useViewModel();
    const navigate = useNavigation<StackNavigationProp<RootStackParamList>>()
    const {usuario} = useUsuario();
    console.log('usuario:',usuario);
    

    useEffect(() => {
        if (message !== '') {
            ToastAndroid.show(message, ToastAndroid.LONG);
        }
    }, [message])

    return (
        <View style={styles.container}>

            <Image style={styles.imgBg} source={require('../../..../../../assets/chef.jpg')} />

            <View style={styles.logoContainer}>

                <Image style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />

                <Text style={styles.logoText}>FOOD APP</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.formHeader}>INGRESAR</Text>

                <InputTextIcon icon={require('../../../assets/email.png')}
                    placeholder='Correo electronico'
                    keyboardType='email-address'
                    value={correo}
                    onChangeText={onChange}
                    property='correo' />

                <InputTextIcon icon={require('../../../assets/password.png')}
                    placeholder='Contraseña'
                    keyboardType='default'
                    value={password}
                    onChangeText={onChange}
                    secureTextEntry={true}
                    property='password' />

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='Ingresar' onPress={() => { ingresar()}} />
                </View>

                <View style={styles.formRegister}>
                    <Text>¿No tienes cuenta?</Text>

                    <TouchableOpacity onPress={() => navigate.navigate('RegisterScreen')}>
                        <Text style={styles.registerText}>Registrate</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}
