import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import color from '../constants/colors'
import { _streamPlayerStyle } from './_styles'
import {
    View,
    Text,
    Platform,
    TouchableOpacity
} from 'react-native'

export default StreamPlayer = ({ play, pause, isPlaying, currentSong, toggleNowPlaying }) => {
        const splitSong = currentSong.split(' - ')
        const [artist, song] = splitSong
    return(
        <View style={styles.container}>
            <View>
                {
                    isPlaying 
                    ?<View style={styles.pauseButton}>
                        <TouchableOpacity onPress={() => toggleNowPlaying(true)} >
                            <Icon name="arrow-drop-up" size={40} color={color.backgroundGrey} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={pause} >
                            <Icon name="pause-circle-outline" size={50} color={color.backgroundGrey} />
                        </TouchableOpacity>
                    </View>
                    :<TouchableOpacity onPress={play} >
                        <Icon name="play-circle-outline" size={50} color={color.backgroundGrey} />
                    </TouchableOpacity>
                }
            </View>        
            {
                (isPlaying && currentSong) &&
                <View style={styles.songInfo}>
                    {
                        song &&
                        <Text style={styles.songTitle}> { `${song}` } </Text>
                    }               
                    <Text style={styles.artistName}> { `    -  ${artist}` } </Text>
                </View>
            }
        </View>
    )
}

const styles = _streamPlayerStyle