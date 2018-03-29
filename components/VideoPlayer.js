import React, { Component } from 'react'
import VideoPlayer from 'react-native-video-controls'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class VideoPlayerComponent extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        header: 'none'
    }

    render() {
            const { navigation } = this.props
            const { source } = navigation.state.params
        return (
            <View style={styles.videoPlayerContainer}>
                <VideoPlayer
                paused={false} 
                style= {styles.videoPlayer}
                navigator={ navigation }
                source={{uri: source}} 
                onEnd={() => navigation.goBack()}    
            />                    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    videoPlayerContainer: {
        flex: 1
    },
    videoPlayer: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
})