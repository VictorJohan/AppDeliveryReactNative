import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './ProfileInfoStyle'
import { useUsuario } from '../../../hooks/useUsuario'
import useViewModel  from './ViewModel'

export const ProfileInfoScreen = () => {

  const {usuario} = useUsuario();
  const {cerrarSession} = useViewModel();
  console.log(usuario);
  

  return (
    <View style={styles.container}>
        <Button title="Cerrar Session" onPress={cerrarSession} />
    </View>
  )
}

