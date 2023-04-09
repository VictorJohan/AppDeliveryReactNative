import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TextInput, ToastAndroid, TouchableOpacity, ScrollView } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
import useViewModel from './ViewModel';
import { InputTextIcon } from '../../components/InputTextIcon';
import { styles } from './RegisterStyles'

export const RegisterScreen = () => {
  const { nombres, message, apellidos, correo, telefono, password, confirmacionPassword, registrar, onChange } = useViewModel();

  useEffect(() => {
    if (message != '') {
      ToastAndroid.show(message, ToastAndroid.LONG);
    }
  }, [message])

  return (
    <View style={styles.container}>

      <Image style={styles.imgBg} source={require('../../../..../../assets/chef.jpg')} />
      <View style={styles.logoContainer}>

        <Image style={styles.logo}
          source={require('../../../assets/user_image.png')}
        />
        <Text style={styles.logoText}>Selecciona una Imagen</Text>
      </View>

      <View style={styles.form}>

        <ScrollView>
          <Text style={styles.formHeader}>REGISTRARSE</Text>

          <InputTextIcon
            keyboardType='default'
            icon={require('../../../assets/user.png')}
            placeholder='Nombres'
            value={nombres}
            onChangeText={onChange}
            property={'nombres'} />

          <InputTextIcon
            keyboardType='default'
            icon={require('../../../assets/my_user.png')}
            placeholder='Apellidos'
            value={apellidos}
            onChangeText={onChange}
            property={'apellidos'} />

          <InputTextIcon
            keyboardType='email-address'
            icon={require('../../../assets/email.png')}
            placeholder='Correo electronico'
            value={correo}
            onChangeText={onChange}
            property={'correo'} />

          <InputTextIcon
            keyboardType='phone-pad'
            icon={require('../../../assets/phone.png')}
            placeholder='Teléfono'
            value={telefono}
            onChangeText={onChange}
            property={'telefono'} />

          <InputTextIcon
            keyboardType='default'
            secureTextEntry={true}
            icon={require('../../../assets/password.png')}
            placeholder='Contraseña'
            value={password}
            onChangeText={onChange}
            property={'password'} />

          <InputTextIcon
            keyboardType='default'
            secureTextEntry={true}
            icon={require('../../../assets/confirm_password.png')}
            placeholder='Confirmar Contraseña'
            value={confirmacionPassword}
            onChangeText={onChange}
            property={'confirmacionPassword'} />


          <View style={{ marginTop: 30 }}>
            <RoundedButton text='Crear' onPress={() => registrar()} />
          </View>
        </ScrollView>

      </View>
    </View>
  )
}


