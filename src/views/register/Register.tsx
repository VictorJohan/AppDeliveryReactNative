import React, { useEffect, useState } from 'react'
import { View, Text, Image, ActivityIndicator, StyleSheet, TextInput, ToastAndroid, TouchableOpacity, ScrollView } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
import useViewModel from './ViewModel';
import { InputTextIcon } from '../../components/InputTextIcon';
import { styles } from './RegisterStyles'
import { ModalPickImage } from '../../components/ModalPickImage';
import { MyColors } from '../../theme/AppTheme';
import { globalStyles } from '../../theme/GlobalStyles';



export const RegisterScreen = () => {
  const { nombres, message, apellidos, correo, telefono, isLoading, image, password, confirmacionPassword, registrar, onChange, pickImage, takePhoto } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (message != '') {
      ToastAndroid.show(message, ToastAndroid.LONG);
    }
  }, [message])

  return (
    <View style={styles.container}>

      <Image style={styles.imgBg} source={require('../../../..../../assets/chef.jpg')} />
      <View style={styles.logoContainer}>

        <TouchableOpacity onPress={() => { setModalVisible(true) }}>

          {
            image === ''
              ?
              <Image style={styles.imageProfile}
                source={require('../../../assets/user_image.png')}
              />
              :
              <Image style={styles.imageProfile}
                source={{ uri: image }}
              />
          }

        </TouchableOpacity>
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
      <ModalPickImage openGaleria={pickImage} openCamara={takePhoto} modalUseState={modalVisible} setModalUseState={setModalVisible} />
      {
        isLoading &&  <ActivityIndicator size="large" color={MyColors.primary} style={globalStyles.loading} />
      }
     
    </View>
  )
}


