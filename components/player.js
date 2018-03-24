import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

import { ShoutStreamer } from '../utility'
import { colors, dimensions } from '../const'

export default Player = ({play, pause, playerStat, streamInfo}) => {
    return (
        <View style={styles.playerContainer}>
            {
                // !playerStat &&
                // <View>
                //     <Text>Escucha VoxFM</Text>
                // </View>
            }
            {/* <Image 
                source={require('../assets/voxfmImage.png')}
                style={styles.bgImage}
                blurRadius={10}
                
            /> */}
            {
                playerStat
                ? <TouchableOpacity onPress={pause}>
                    <Icon name="pause-circle-outline" size={60} color={'white'} />
                  </TouchableOpacity>
                : <TouchableOpacity onPress={play}>
                    <Icon name="play-circle-outline" size={60} color={'white'} />
                  </TouchableOpacity>
            }
            {
                playerStat &&   
                <View style={styles.currentSongContainer}>
                    <Text style={styles.currentSong}>{streamInfo.currentSong}</Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    playerContainer: {
        alignSelf: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        top: '146%',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    // bgImage: {
    //     position: 'absolute',
    //     height: '100%',
    //     width: '100%',
    //     opacity: .4,
    // },
    currentSongContainer: {
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: colors.red,
    },
    currentSong: {
        color: 'white'
    }
 })