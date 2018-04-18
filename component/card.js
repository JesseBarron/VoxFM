import React,{ Component } from 'react'
import { _cardStyle } from './_styles' 
import {
    View,
    Text,
    Image,
    Platform,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default Card = ({ item, navigation, play, pause, isPlaying }) => {
    const thumbnail = item.attachments.data[0].media.image.src 
            ? item.attachments.data[0].media.image.src 
            : null
    const { source } = item
    const OS = Platform.OS
    return(
        <View style={styles.container} >
            <View style={styles.messageContainer}>
                {/* <Image
                    source={require('../assets/voxfmImage.png')}
                    style={styles.profileImage}
                    resizeMode={'center'}
                /> */}
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.message || 'Sigenos en VoxFM'}</Text>
                </View>
            </View>
            <View style={styles.videoContainer} > 
                <View  style={styles.backgroundImage}>
                    <Image
                        style={{height:'100%', width:'100%'}}
                        source={thumbnail ? {uri: thumbnail} : require('../assets/voxfmImage.png')}
                        resizeMode={'cover'}
                        blurRadius={OS == 'ios' ? 10 : 4}
                    />
                </View>
                <View style={styles.thumbnailImage}>
                    <TouchableOpacity
                        activeOpacity={.7}
                        onPress={() => {
                            navigation.navigate('VideoPlayer',{ source, play, isPlaying }),
                            pause()
                        }}
                    >
                        <Image 
                            resizeMode={'contain'}
                            style={{height: '99%', width: '100%'}}
                            source={thumbnail ? {uri: thumbnail} : require('../assets/voxfmImage.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = _cardStyle