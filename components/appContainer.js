import React, { Component } from 'react'
import {
    Platform,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Text,
    View
} from 'react-native'
import { connect } from 'react-redux'
import VideoPlayer from 'react-native-video-controls'


import { fetchFeed, fetchStreamInformation } from '../store'
import {Header, Player, List} from './index'
import { colors, dimensions } from '../const'
import { ShoutStreamer } from '../utility'

const URL = "http://www.indahosting.net:8128/;"

class AppContianer extends Component {
    constructor(props) {
        super(props)
        this.state = {
          playerStat: false,
        }
      }


     async componentDidMount() {
         this.props.getFeed()
         this.props.getCurrentSong()
      }
    
    handlePlay = () => {
        console.log('Play')
        ShoutStreamer.play(URL)
        this.setState({
            playerStat: true
        })
    }

    handlePause = () => {
        console.log('Pause')
        ShoutStreamer.pause()
        this.setState({
            playerStat: false
        })
    }
    handlePlayVid = (url) => {
        console.log('Playing Video')
        console.log(url)
        VideoPlayer.play(url)
    }
    render() {
        let { playerStat } = this.state
        let { fbFeed, streamInfo } = this.props
        return ( 
            <View style={styles.container} >
                <Header />
                <ScrollView style={styles.scrollContainer}>                    
                    <List data={fbFeed} playVid={this.handlePlayVid}/>
                </ScrollView>
                <Player pause={this.handlePause} play={this.handlePlay} playerStat={playerStat} streamInfo={streamInfo}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1, 
      zIndex: -1,
      height: dimensions.height,
      backgroundColor: colors.orange
    },
    scrollContainer: {
        position: 'absolute',
        height: "96%",
        marginTop: 30,
        zIndex: -2
    }
  });

const mapState = ({ fbFeed, streamInfo }) => ({
    fbFeed,
    streamInfo
})

const mapDispatch = dispatch => ({
    async getFeed() {
        return dispatch(fetchFeed())
    },
    async getCurrentSong() {
        return dispatch(fetchStreamInformation())
    }
})

export default connect(mapState, mapDispatch)(AppContianer)