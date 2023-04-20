import React from 'react'
import { Rol } from '../models/Rol'
import { FlatList, View } from 'react-native'
import { RolCard } from './RolCard'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../App'

interface Props {
    roles: Rol[]
}


export const RolesList = ({ roles }: Props) => {
    const navigate = useNavigation<StackNavigationProp<RootStackParamList, 'RolScreen', undefined>>()
    return (
        <View style={{marginTop:50}}>
            <FlatList
                data={roles} renderItem={({ item }) => <RolCard rol={item} navigate={navigate} />} />
                
        </View>
    )
}
