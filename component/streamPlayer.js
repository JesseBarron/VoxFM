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
    return(
        <View style={styles.container}>
        <View>
            {
                isPlaying 
                ?<TouchableOpacity onPress={pause} >
                    <Icon name="pause-circle-outline" size={49} color={color.blue} />
                </TouchableOpacity>
                :<TouchableOpacity onPress={play} >
                    <Icon name="play-circle-outline" size={49} color={color.blue} />
                </TouchableOpacity>
            }
        </View>        
        {
            (isPlaying && currentSong) &&
            <View>
                <Text style={{color: color.yellow}}> { currentSong } </Text>
            </View>
        }
        </View>
    )
}

const styles = _streamPlayerStyle