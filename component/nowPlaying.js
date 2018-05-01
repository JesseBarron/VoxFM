import React, { Component } from 'react'
import Modal from 'react-native-modalbox'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'

import { _nowPlaying } from './_styles'

const NowPlaying = (props) => {
        const {play, pause, isPlaying, show} = props
        const songInfo = props.currentSong.split(' - ')
        const artwork = props.artwork ? {uri: props.artwork} : require('../assets/voxfmImage_Alpha.png')
        const artist = songInfo[0]
        const song = songInfo[1]
        return (
            <Modal
                style={styles.modal}
                isOpen={show}
                // isOpen={true}
                onClosed={() => props.toggleNowPlaying(false)}
                entry={'bottom'}
            >
                <View style={styles.header}>
                    {props.children}
                </View>
                <View style={styles.artwork}>
                    <Image 
                        source={artwork}
                        // This is The backgroundImage
                        style={{width: '160%', height:'100%', position: 'absolute'}}
                        resizeMode="cover"
                        blurRadius={10}
                    />
                    <Image 
                        source={artwork}
                        //This is the thumbnail
                        style={{width: '90%', height:'100%'}}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.player}>
                    <View style={styles.songInfo}>
                        <Text style={[[styles.songText, styles.songTitle]]}>{song}</Text>
                        <Text style={[styles.songText, styles.songArtist]}>{artist}</Text>
                    </View>
                    <View style={styles.playButton}>
                        {
                            isPlaying ?
                            <TouchableOpacity onPress={pause} >
                                <Icon name="pause" size={75} color={'white'}ß/>
                            </TouchableOpacity>
                            :<TouchableOpacity onPress={play} >
                                <Icon name="play-arrow" size={75} color={'white'}/>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </Modal>
        )
}

const styles = _nowPlaying

const mapState = ({ currentSong }) => ({
    artwork: currentSong.artwork,
    currentSong: currentSong.currentSong
})

const mapDispatch = dispatch => ({
    
})

export default connect(mapState, mapDispatch)(NowPlaying)