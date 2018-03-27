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

import { fetchFeed, fetchStreamInformation } from '../store'
import {Header, Player, List} from './index'
import { colors, dimensions } from '../const'
import { ShoutStreamer } from '../utility'
import { socket } from '../clientServices'

const URL = "http://www.indahosting.net:8128/;"

class AppContianer extends Component {
    constructor(props) {
        super(props)
        this.state = {
          playerStat: false,
          currentSong: ''
        }
      }


     async componentDidMount() {
         this.props.getFeed()
         this.props.getCurrentSong()
            .then(currentSong => this.setState({ currentSong }))
      }
    
    handlePlay = () => {
        console.log('Play')
        ShoutStreamer.play(URL)
        this.setState({
            playerStat: true
        })
        ShoutStreamer.configInfoCenter(this.state.currentSong)
    }

    handlePause = () => {
        console.log('Pause')
        ShoutStreamer.pause()
        this.setState({
            playerStat: false
        })
    }

    render() {
        let { playerStat, currentSong } = this.state
        let { fbFeed } = this.props
        socket.on('streamInfo updated', (currentSong) => {
            ShoutStreamer.configInfoCenter(currentSong)
            this.setState({ currentSong })
        })
        return ( 
            <View style={styles.container} >
                <Header />
                <ScrollView style={styles.scrollContainer}>                    
                    <List data={fbFeed} playVid={this.handlePlayVid}/>
                </ScrollView>
                <Player pause={this.handlePause} play={this.handlePlay} playerStat={playerStat} currentSong={currentSong}/>
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

const mapState = ({ fbFeed, currentSong }) => ({
    fbFeed,
    currentSong
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