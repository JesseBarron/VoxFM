import React,{ Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default class Example2 extends Component {
    static navigationOptions = {
        title: 'none'
    }
    render () {
        return(
            <View>
                <Text>This is an example</Text>
            </View>
        )
    }
}