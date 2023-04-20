import React, { useEffect, useState } from 'react'
import { View, Text, Button, Image, ActivityIndicator, ScrollView, ToastAndroid, TouchableOpacity } from 'react-native'


import useViewModel from './ViewModel'
import { useUsuario } from '../../../../hooks/useUsuario'
import { InputTextIcon } from '../../../../components/InputTextIcon'
import { ModalPickImage } from '../../../../components/ModalPickImage'
import { RoundedButton } from '../../../../components/RoundedButton'
import { MyColors } from '../../../../theme/AppTheme'
import { globalStyles } from '../../../../theme/GlobalStyles'
import { styles } from './ProfileInfoStyle'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../../App'

export const ClienteProfileInfoScreen = () => {
  const { nombres, message, apellidos, correo, telefono, isLoading, image, password, confirmacionPassword, usuario,cerrarSession, cargarInformacion, onChange, pickImage, takePhoto } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);

  const navigate = useNavigation<StackNavigationProp<RootStackParamList>>()

  useEffect(() => {

    cargarInformacion();

  }, [usuario])

  return (
    <View style={styles.container}>

      <Image style={styles.imgBg} source={require('../../../../../assets/chef.jpg')} />
      <TouchableOpacity style={styles.btnSalir} onPress={async () => {await cerrarSession()}}>
        <Image style={styles.btnSalirImag} source={require('../../../../../assets/salir.png')} />
      </TouchableOpacity>

      <View style={styles.logoContainer}>

        <TouchableOpacity onPress={() => { setModalVisible(true) }}>

          {
            image === ''
              ?
              <Image style={styles.imageProfile}
                source={require('../../../../../assets/user_image.png')}
              />
              :
              <Image style={styles.imageProfile}
                source={{ uri: image }}
              />
          }

        </TouchableOpacity>
        {/* <Text style={styles.logoText}>Selecciona una Imagen</Text> */}
      </View>

      <View style={styles.form}>

        <ScrollView>
          <Text style={styles.formHeader}>INFORMACIÓN</Text>

          <InputTextIcon
            keyboardType='default'
            icon={require('../../../../../assets/user.png')}
            placeholder='Nombres'
            value={nombres}
            onChangeText={onChange}
            property={'nombres'} />

          <InputTextIcon
            keyboardType='default'
            icon={require('../../../../../assets/my_user.png')}
            placeholder='Apellidos'
            value={apellidos}
            onChangeText={onChange}
            property={'apellidos'} />

          <InputTextIcon
            keyboardType='email-address'
            icon={require('../../../../../assets/email.png')}
            placeholder='Correo electronico'
            value={correo}
            onChangeText={onChange}
            property={'correo'} />

          <InputTextIcon
            keyboardType='phone-pad'
            icon={require('../../../../../assets/phone.png')}
            placeholder='Teléfono'
            value={telefono}
            onChangeText={onChange}
            property={'telefono'} />


          <View style={{ marginTop: 70 }}>
            <RoundedButton text='Actualizar' onPress={() => { }} />
          </View>
        </ScrollView>

      </View>
      <ModalPickImage openGaleria={pickImage} openCamara={takePhoto} modalUseState={modalVisible} setModalUseState={setModalVisible} />
      {
        isLoading && <ActivityIndicator size="large" color={MyColors.primary} style={globalStyles.loading} />
      }

    </View>
  )
}

