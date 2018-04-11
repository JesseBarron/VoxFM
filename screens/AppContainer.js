import React,{ Component } from 'react'
import { connect } from 'react-redux'
import Orientation from 'react-native-orientation'
import {
    View,
    Text,
    Linking,
    Platform,
    StyleSheet,
    ScrollView
} from 'react-native'
import { socket } from '../clientServices'
import { ShoutStreamer } from '../utility'
import { _AppContainerStyle } from './_styles'
import { fetchFeed, fetchCurrentSong } from '../store'
import {
    Header,
    Feed,
    StreamPlayer
} from '../component'

const URL = "http://www.indahosting.net:8128/;"
class AppContainer extends Component {
    constructor() {
        super()
        this.state = {
            playerStat: false,
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
        const { fbFeed, navigation } = this.props
        const { feed, nextPage } = fbFeed
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
                <View style={{flex: 2}}>
                    <Header goTo={this.goTo}/>
                </View>
                <View style={{flex: OS == 'ios' ? 8 : 10}} >
                    <ScrollView  >
                        <Feed 
                            feed={feed} 
                            navigation={navigation}
                            play={this.onPlay}
                            pause={this.onPause}
                        />
                    </ScrollView>
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
    fbFeed,
    currentSong
})

const mapDispatch = (dispatch) => ({
   async fetchFeed() {
        let action = fetchFeed()
        return dispatch(action)
    },
   async fetchCurrentSong() {
        let action = fetchCurrentSong()
        return dispatch(action)
    }
})

export default connect(mapState, mapDispatch)(AppContainer)