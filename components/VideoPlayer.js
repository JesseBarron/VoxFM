import React, { Component } from 'react'
import VideoPlayer from 'react-native-video-controls'
// import Orientation from 'react-native-orientation'
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
    // componentDidMount(){
    //     Orientation.unlockAllOrientations()
    // }
    onBack = () => {
        // Orientation.lockToPortrait()
        this.props.navigation.goBack()
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
                source={{uri: source}} 
                onEnd={() => this.onBack()}   
                onBack={() => this.onBack()} 
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