import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import {
    View,
    Text,
    Image,
    Animated
} from 'react-native'

import { _thankYou } from './_styles'

export default ThankYouScreen = () => {
    return (
        <View style={styles.container}>
            <Icon name="check-circle" size={180} color="green" />
            <Text style={styles.text}>Mensaje enviado. {'\n'} ¡Gracias!</Text>
        </View>
    )
}

const styles = _thankYou