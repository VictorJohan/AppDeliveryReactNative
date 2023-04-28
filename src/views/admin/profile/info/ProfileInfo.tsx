import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './ProfileInfoStyle'
import useViewModel  from './ViewModel'

export const AdminProfileInfoScreen = () => {

  const { cerrarSession } = useViewModel();
  return (
    <View style={styles.container}>
        <Button title="Cerrar Session" onPress={() => {cerrarSession()}} />
    </View>
  )
}

