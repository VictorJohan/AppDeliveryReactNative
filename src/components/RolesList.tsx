import React from 'react'
import { Rol } from '../models/Rol'
import { FlatList, View } from 'react-native'
import { RolCard } from './RolCard'

interface Props {
    roles: Rol[]
}

export const RolesList = ({ roles }: Props) => {
    return (
        <View style={{marginTop:50}}>
            <FlatList
                data={roles} renderItem={({ item }) => <RolCard rol={item} />} />
                
        </View>
    )
}
