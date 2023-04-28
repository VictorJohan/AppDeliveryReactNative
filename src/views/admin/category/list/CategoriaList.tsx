import React from 'react'
import { Text, View, FlatList } from 'react-native';
import { CategoriaCard } from '../../../../components/CategoriaCard'
import { styles } from './CategoriaListStyle'
import viewModel from './ViewModel'

export const AdminCategoryListScreen = () => {

  const { categorias, getCategorias } = viewModel();

  React.useEffect(() => {
    getCategorias();
  }, [])

  return (
    <View style={styles.container}>

      <FlatList
        data={categorias}
        renderItem={({ item }) => <CategoriaCard categoria={item} />}
      />

      {/* <CategoriaCard /> */}
    </View>
  )
}
