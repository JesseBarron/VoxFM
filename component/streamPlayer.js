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

export default StreamPlayer = ({ play, pause, isPlaying, currentSong }) => {
        const splitSong = currentSong.split(' - ')
        const [artist, song] = splitSong
    return(
        <View style={styles.container}>
            <View style={styles.button}>
                {
                    isPlaying 
                    ?<TouchableOpacity onPress={pause} >
                        <Icon name="pause-circle-outline" size={50} color={color.backgroundGrey} />
                    </TouchableOpacity>
                    :<TouchableOpacity onPress={play} >
                        <Icon name="play-circle-outline" size={50} color={color.backgroundGrey} />
                    </TouchableOpacity>
                }
            </View>        
            {
                (isPlaying && currentSong) &&
                <View style={styles.songInfo}>
                    <Text style={styles.artistName}> { `${artist} -` } </Text>                
                    <Text style={styles.songTitle}> { `   ${song}` } </Text>
                </View>
            }
        </View>
    )
}

const styles = _streamPlayerStyle