import React,{ Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Orientation from 'react-native-orientation'
import MusicControl from 'react-native-music-control'
import {
    View,
    Text,
    Easing,
    Linking,
    Animated,
    Platform,
    StyleSheet,
    ScrollView,
    NativeEventEmitter
} from 'react-native'

import { socket } from '../clientServices'
import { ShoutStreamer } from '../utility'
import { _AppContainerStyle } from './_styles'
import { fetchFeed, fetchCurrentSong, fetchStreamURL } from '../store'
import {
    Feed,
    Header,
    StreamPlayer,
    NowPlaying,
    nowPlaying
} from '../component'

// const URL = "http://www.indahosting.net:8128/;"
class AppContainer extends Component {
    constructor() {
        super()
        this.state = {
            playerStat: false,
            slide: new Animated.Value(2),
            fade: new Animated.Value(1),
            currentSong: 'VoxFM',
            showModal: false,
            showPlayer: new Animated.Value(.9)
        }
    }

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        try {
            this.props.fetchInitData()
            this.registerSongUpdateListener()
            this.setMusicControlInfo()
            Orientation.lockToPortrait()

        } catch(e) {
            console.log(e)
        }
    }

    setMusicControlInfo = () => {
        const currentSong = this.props.currentSong.split(' - ')
        const artist = currentSong[0]
        const song = currentSong[1]
        const artwork = this.props.artwork

        MusicControl.setNowPlaying({
            title: song || 'VoxFM',
            artwork: artwork || require('../assets/VoxFMLogo-BLK.png'),
            artist: artist || 'VoxFM',
            album: 'Estas Escuchando VoxFM'
        })
    }

    configMusicControls = () => {
        MusicControl.enableBackgroundMode(true)
        if(Platform.OS == 'ios') MusicControl.handleAudioInterruptions(true)
        MusicControl.enableControl('play', true)
        MusicControl.enableControl('pause', true)
        MusicControl.on('play', () => {
            this.onPlay()
        })
        MusicControl.on('pause', () => {
            this.onPause()
        })
        MusicControl.on('closeNotification', () => {
            this.onPause()
        })
    }

    registerSongUpdateListener =  () => {
        const OS = Platform.OS
        console.log('register likstener')
        socket.on('streamInfo updated', async ({ currentSong, artwork }) => {
            try {
                await this.props.dispatchCurrentSong({currentSong, artwork})
                this.setMusicControlInfo()

            } catch(e) {
                console.log(e)
            }
        })
    }
    //Move this to the Header Component
    goTo = (site) => {
        switch(site) {
            case 'twitter':
            Linking.openURL('https://twitter.com/vox94radio?lang=es')
            break;
            case 'facebook':
            Linking.openURL('fb://page/?id=359743347745536')
            break;
            case 'instagram':
            Linking.openURL('https://www.instagram.com/vox94radio/')
            case 'voxfm': 
            Linking.openURL('https://somosvoxfm.com/')
        }
    }
    //Move this to the Header Component
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

    //These Can Stay here
    playVid = () => {
        this.setState({playerStat: false})
    }

    endVid = () => {
        this.setState({playerStat: true})
        ShoutStreamer.play(URL)
    }

    onPlay = () => {
        ShoutStreamer.play(this.props.streamURL)
        this.setState({playerStat: true})
        this.setMusicControlInfo()
        this.configMusicControls()
        MusicControl.updatePlayback({
            state: MusicControl.STATE_BUFFERING,
        })     
    }

    onPause = () => {
        ShoutStreamer.pause()
        MusicControl.updatePlayback({
            state: MusicControl.STATE_PAUSED
        })   
        this.setState({ playerStat: false })
    }

    toggleNowPlaying = (showModal) => {
        let direction = showModal ? 'up' : 'down'
        this.hideHead(direction)
        this.togglePlayer(showModal)
        this.setState({ showModal })
    }

    togglePlayer = (showPlayer) => {
        if(showPlayer) {
            Animated.timing(
                this.state.showPlayer,
                {
                    toValue: 0,
                    duration: 600
            }).start()
        } else {
            Animated.timing(
                this.state.showPlayer,
                {
                    toValue: .9,
                    duration: 1000
            }).start()
        }
    }

    render() {
        const {feed, nextPage, navigation, currentSong, artwork } = this.props
        const { playerStat } = this.state
        const OS = Platform.OS
        return(
            <View style={styles.container}>
                <Animated.View style={{flex: this.state.slide, opacity: this.state.slide}}>
                    <View style={{flex: 1}}>
                        <Header goTo={this.goTo} navigation={navigation}/>
                    </View>
                </Animated.View>
                <View style={{flex: OS == 'ios' ? 8 : 10}} >
                        <Feed
                            navigation={navigation}
                            hideHead={this.hideHead}
                            play={this.onPlay}
                            pause={this.onPause}
                            isPlaying={playerStat}
                        />
                </View>
                <Animated.View style={{flex: this.state.showPlayer}} >
                    <StreamPlayer 
                        play={this.onPlay}
                        pause={this.onPause}
                        toggleNowPlaying={this.toggleNowPlaying}
                        isPlaying={playerStat}
                        currentSong={ currentSong }
                    />
                </Animated.View>
                <NowPlaying 
                    show={this.state.showModal}
                    toggleNowPlaying={this.toggleNowPlaying}
                    play={this.onPlay}
                    pause={this.onPause}
                    isPlaying={playerStat}
                >
                    <Header goTo={this.goTo} navigation={navigation}/>
                </NowPlaying>
            </View>
        )
    }
}

const styles = _AppContainerStyle

const mapState = ({fbFeed, currentSong, streamURL}) => ({
    feed: fbFeed.feed,
    nextPage: fbFeed.nextPage,
    currentSong: currentSong.currentSong, //Naming needs to change
    artwork: currentSong.artwork,
    streamURL
})

const mapDispatch = (dispatch) => ({
    async fetchInitData() {
        this.dispatchFeed()
        this.dispatchCurrentSong()
        this.dispatchStreamURL()
    },
   async dispatchFeed(url) {
        let action = fetchFeed(url)
        return dispatch(action)
    },
   async dispatchCurrentSong() {
        let action = fetchCurrentSong()
        return dispatch(action)
    },
    async dispatchStreamURL() {
        let action = fetchStreamURL()
        return dispatch(action)
    }
})

export default connect(mapState, mapDispatch)(AppContainer)