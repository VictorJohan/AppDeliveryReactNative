import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { styles } from './StyleCategoria';
import { InputTextIcon } from '../../../components/InputTextIcon';
import useViewModel from './ViewModel';
import { RoundedButton } from '../../../components/RoundedButton';
import { ModalPickImage } from '../../../components/ModalPickImage';


export const CategoriaScreen = () => {

  const { nombre, imagen, descripcion, message, onChange, pickImage, takePhoto, guardar } = useViewModel();
  const [modalVisible, setModalVisible] = React.useState(false);

  useEffect(() => {
    if (message != '') {
      ToastAndroid.show(message, ToastAndroid.LONG);
    }
  }, [message])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { setModalVisible(true) }}>
        {
          imagen === ''
            ?
            <Image style={styles.imageCatergoria}
              source={require('../../../../assets/image_new.png')}
            />
            :
            <Image style={styles.imageCatergoria}
              source={{ uri: imagen }}
            />
        }
      </TouchableOpacity>

      <View>
        <InputTextIcon
          icon={require('../../../../assets/categories.png')}
          placeholder='Nombre de la categoría'
          value={nombre}
          onChangeText={onChange}
          property={'nombre'} />

        <InputTextIcon
          placeholder="Descripción"
          icon={require('../../../../assets/description.png')}
          value={descripcion}
          onChangeText={onChange}
          property='descripcion' />
      </View>

      <View style={styles.btnGuardar}>

        <RoundedButton text='Guardar' onPress={() => { guardar() }} />
      </View>
      <ModalPickImage openGaleria={pickImage} openCamara={takePhoto} modalUseState={modalVisible} setModalUseState={setModalVisible} />
    </View>
  )
}
