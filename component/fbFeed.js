import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    FlatList,
} from 'react-native'

import Card from './card'
import { fetchFeed } from '../store'

const Feed = ({feed, nextPage, updateFeed, navigation, play, pause}) => {
    return (
        <View>
        {
            feed &&
            <FlatList 
                data = {feed}
                onEndReachedThreshold={5}
                onEndReached = {(x) => {
                    console.log('end Reached', x)
                    updateFeed(nextPage)
                }} 
                keyExtractor = {(item, index) => index}
                renderItem = {({ item }) => <Card item={item} navigation={navigation} play={play} pause={pause}/>}
            />

        }
        </View>
    )
}
const mapState = ({fbFeed}) => ({
    feed: fbFeed.feed,
    nextPage: fbFeed.nextPage
})
const mapDispatch = dispatch => ({
    async updateFeed(url) {
        let action = await fetchFeed(url)
        dispatch(action)
    }
})
export default connect(mapState, mapDispatch)(Feed)