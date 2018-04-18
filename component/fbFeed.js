import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    FlatList,
} from 'react-native'

import Card from './card'
import { fetchFeed } from '../store'

class Feed extends Component {
    constructor(props) {
        super(props)
        this.prevPos = -90
    }
    
    hideHead = (e) => {
        const y = e.nativeEvent.contentOffset.y
        const direction = (y < this.prevPos || (y >= 0 && y <= 100)) ? 'down' : 'up'
        this.prevPos = y
        this.props.hideHead(direction)
    } 

    render(){
        const {feed, nextPage, hideHead, navigation, updateFeed, play, pause, isPlaying} = this.props
        return (
            <View>
            {
                feed &&
                <FlatList 
                    data = {feed}
                    onEndReachedThreshold={5}
                    onEndReached = {() =>  updateFeed(nextPage) }
                    scrollEventThrottle={5000}
                    onScroll={e => this.hideHead(e)}
                    keyExtractor = {(item, index) => item.id}
                    renderItem = {({ item }) => 
                    <Card 
                        item={item} 
                        navigation={navigation} 
                        play={play} 
                        pause={pause}
                        isPlaying={isPlaying}
                    />}
                />

            }
            </View>
        )
    }
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