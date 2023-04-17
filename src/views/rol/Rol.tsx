import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { RolViewModel } from './ViewModel';
import { Rol } from '../../models/Rol';
import { RolesList } from '../../components/RolesList';
export const RolScreen = () => {

  const { usuario } = RolViewModel();



  return (

    // <FlatList data={usuario?.roles}
    //   renderItem={({ item }) => {
    //     return (
    //       <View>
    //         <Image source={{ uri: item.image }} style={{ width: 300, height: 300 }} />
    //         <Text>{item.nombre}</Text>
    //       </View>
    //     )
    //   }}
    // />

    <RolesList roles={usuario?.roles!} />
  )
}
