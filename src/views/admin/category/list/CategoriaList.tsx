import React from 'react'
import { Text, View, FlatList } from 'react-native';
import { CategoriaCard } from '../../../../components/CategoriaCard'
import { styles } from './CategoriaListStyle'
import viewModel from './ViewModel'
import { useFocusEffect } from '@react-navigation/native';

export const AdminCategoryListScreen = () => {

  const { categorias, getCategorias } = viewModel();

  useFocusEffect(
    React.useCallback(() => {
      getCategorias();
    }, [])
  )

  return (
    <View style={styles.container}>

      <FlatList
        data={categorias}
        renderItem={({ item }) => <CategoriaCard lista={categorias} categoria={item} />}
      />

      {/* <CategoriaCard /> */}
    </View>
  )
}
