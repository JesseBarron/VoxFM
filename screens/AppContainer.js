import React,{ Component } from 'react'
import { connect } from 'react-redux'
import Orientation from 'react-native-orientation'
import {
    View,
    Text,
    Easing,
    Linking,
    Animated,
    Platform,
    StyleSheet,
    ScrollView
} from 'react-native'
import { socket } from '../clientServices'
import { ShoutStreamer } from '../utility'
import { _AppContainerStyle } from './_styles'
import { fetchFeed, fetchCurrentSong } from '../store'
import {
    Feed,
    Header,
    StreamPlayer
} from '../component'

const URL = "http://www.indahosting.net:8128/;"
class AppContainer extends Component {
    constructor() {
        super()
        this.state = {
            playerStat: false,
            slide: new Animated.Value(2.9),
            fade: new Animated.Value(1),
            currentSong: 'VoxFM'
        }
    }

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this.props.fetchFeed()
        this.props.fetchCurrentSong()
            .then(currentSong => this.setState({currentSong}))
        Orientation.lockToPortrait()
    }

    goTo = (site) => {
        switch(site) {
            case 'twitter':
            Linking.openURL('https://twitter.com/vox94radio?lang=es')
            break;
            case 'facebook':
            Linking.openURL('https://www.facebook.com/somosvoxfm/')
            break;
            case 'instagram':
            Linking.openURL('https://www.instagram.com/vox94radio/')
            case 'voxfm': 
            Linking.openURL('https://somosvoxfm.com/')
        }
    }
    hideHead = (direction) => {
        if(direction == 'up') {
            Animated.sequence([
                Animated.timing(
                    this.state.slide,
                    {
                        toValue: 0,
                        duration: 1000,
                    }
                ),
                Animated.timing(
                    this.state.fade,
                    {
                        toValue: 0,
                        duration: 200,
                    }
                ),
            ]).start()
        } else {
            Animated.sequence([
                Animated.timing(
                    this.state.slide,
                    {
                        toValue: 2,
                        duration: 1000,
                    }
                ),
                Animated.timing(
                    this.state.fade,
                    {
                        toValue: 1,
                        duration: 2000,
                    }
                ),
            ]).start()
        }
    }
    playVid = () => {
        this.setState({playerStat: false})
    }
    endVid = () => {
        this.setState({playerStat: true})
        ShoutStreamer.play(URL)
    }
    onPlay = () => {
        ShoutStreamer.play(URL)
        this.setState({playerStat: true})
    }

    onPause = () => {
        ShoutStreamer.pause()
        this.setState({ playerStat: false })
    }
    render() {
        const {feed, nextPage, navigation } = this.props
        const { playerStat, currentSong } = this.state
        const OS = Platform.OS
        socket.on('streamInfo updated', (currentSong) => {
            console.log("Socket Updated", currentSong)
            if(OS == 'ios') {
                ShoutStreamer.configInfoCenter(currentSong, "VoxFM")
            } 
            this.setState({currentSong})
        })
        return(
            <View style={styles.container}>
                <Animated.View style={{flex: this.state.slide, opacity: this.state.slide}}>
                    <View style={{flex: 2}}>
                        <Header goTo={this.goTo}/>
                    </View>
                </Animated.View>
                <View style={{flex: OS == 'ios' ? 8 : 10}} >
                        <Feed
                            navigation={navigation}
                            hideHead={this.hideHead}
                            play={this.onPlay}
                            pause={this.onPause}
                        />
                </View>
                <View style={{flex: 1}} >
                    <StreamPlayer 
                        play={this.onPlay}
                        pause={this.onPause}
                        isPlaying={playerStat}
                        currentSong={currentSong}
                    />
                </View>
            </View>
        )
    }
}

const styles = _AppContainerStyle

const mapState = ({fbFeed, currentSong}) => ({
    feed: fbFeed.feed,
    nextPage: fbFeed.nextPage,
    currentSong
})

const mapDispatch = (dispatch) => ({
   async fetchFeed(url) {
        let action = fetchFeed(url)
        return dispatch(action)
    },
   async fetchCurrentSong() {
        let action = fetchCurrentSong()
        return dispatch(action)
    }
})

export default connect(mapState, mapDispatch)(AppContainer)