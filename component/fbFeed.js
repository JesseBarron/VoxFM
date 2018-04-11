import React,{ Component } from 'react'
import {
    View,
    Text,
    FlatList,
} from 'react-native'

import Card from './card'

export default Feed = ({feed, navigation, play, pause}) => {
    return (
        <FlatList 
            data = {feed}
            keyExtractor = {(item, index) => item.id}
            renderItem = {({ item }) => <Card item={item} navigation={navigation} play={play} pause={pause}/>}
        />
    )
}