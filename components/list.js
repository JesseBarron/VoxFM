import React, { Component } from 'react'
import { TouchableOpacity, FlatList } from 'react-native'

import { Card } from './index'
import { dimensions } from '../const'


export default renderList = ({ data, pauseStream, navigation }) => {
    const feed = data.feed
    return (
       <FlatList
        data={feed}
        keyExtractor={(item, index) => item.id}
        renderItem = {({item}) => <Card item={item} pauseStream={pauseStream} navigation={navigation}/>}
       />
    )
}

