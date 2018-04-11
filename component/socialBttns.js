import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import color from '../constants/colors'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Linking
} from 'react-native'

export default SocialButtons = ({goTo}) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.button} onPress={() => goTo('twitter')}>
                <Icon name='twitter-with-circle' size={30} color={'#1DA1F2'}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => goTo('facebook')} >
                <Icon name='facebook-with-circle' size={50} color={'#4267B2'}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => goTo('instagram')} >
                <Icon name='instagram-with-circle' size={30} color={color.red}></Icon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        marginRight: 12
    }
})