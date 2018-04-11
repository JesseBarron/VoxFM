import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import VideoPlayer from 'react-native-video-controls'
import Orientation from 'react-native-orientation'

export default class VideoPlayerComponent extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        Orientation.unlockAllOrientations()
    }
    componentWillUnmount() {
        Orientation.lockToPortrait()
    }
    static navigationOptions = {
        header: false
    }
    onBack = () => {
        this.props.navigation.goBack()
        this.props.navigation.state.params.play()
    }
    render() {
        const { source } = this.props.navigation.state.params
        return(
            <View style={styles.container} >
                <VideoPlayer 
                    paused={false}
                    onEnd={() => this.onBack()}
                    onBack={() => this.onBack()}
                    source={{uri: source}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})