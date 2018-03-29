import React, { Component } from 'react'
import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native'
import { dimensions } from '../const'

export default VideoComponent = ({item, pauseStream, navigation}) => {
    let thumbnail = item.attachments ? item.attachments.data[0].media.image.src : null
    let { source } = item
    return (
       <View style={styles.cardContainer} >
           <View style={styles.messageContainer}>
           <Image 
               source={require('../assets/voxfmImage.png')}
               style={{height: 50, width: 50, borderRadius: 25, borderWidth: .23, borderColor: 'black'}}
               resizeMode={'contain'}
           />
               <Text>{item.message || 'Siguenos en VoxFM'}</Text>
           </View>
           <View style={{ width: 420, height: 200 }} >
               <Image 
                   resizeMode={'cover'}
                   blurRadius={10}
                   style={{
                       width: 620, 
                       height: 500,
                       position: 'absolute',
                       zIndex: -2
                   }}
                   source= {{uri: thumbnail || '../assets/voxfmImage.png'}}
               />
               <TouchableOpacity activeOpacity={.7} onPress={() => {
                   pauseStream()
                   navigation.navigate('VideoPlayer', { navigation, source })
                   }} 
                >
                   <Image
                       resizeMode={'contain'}
                       style={{width:'100%', height:'100%'}}
                       source= {{uri: thumbnail || '../assets/voxfmImage.png'}}
                   />
               </TouchableOpacity>
           </View>
       </View>
    )
}

const styles = StyleSheet.create({
    renderItem: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        margin: 5
    },
    cardContainer: {
        backgroundColor: 'rgba(0, 0, 0, .4)',
        width: dimensions.width - 10,
        height: 'auto',
        marginLeft: 5,
        marginRight: 5,
        overflow: 'hidden',
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    messageContainer: {
        width: '100%',
        padding: 15,
        backgroundColor: 'white'
    },
    message: {
        fontSize: 15,
    }
})