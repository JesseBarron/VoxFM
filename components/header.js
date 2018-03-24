import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

export default class Header extends Component { 
    render() {
        return (
            <View style={styles.headerContainer} >
                <Text>This is the header</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        height: 60
    }
})