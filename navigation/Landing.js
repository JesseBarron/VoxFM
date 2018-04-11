import React,{ Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default class Landing extends Component {
    static navigationOptions = {
        header: null
    }
    render () {
        return(
            <View>
                <Text>This the Landing</Text>
            </View>
        )
    }
}