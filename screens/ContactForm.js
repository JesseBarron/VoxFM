import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { _ContactForm } from './_styles'
import {
    View,
    Text,
    Input,
    TouchableOpacity,
    Button
} from 'react-native'


const _backButton = () => (
    <TouchableOpacity style={styles.backButton}>
        <Icon name="chevron-left" size={40} />
    </TouchableOpacity>
);

export default class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    static navigationOptions = ({ navigation }) =>  {
        const paramas = navigation.state.params || {}
        return {
            headerTitle: 'ContactForm',
            headerLeft: (
                <_backButton />
            )
        }
    }
    render() {
        return (
            <View>
                <Text>This is the Contact Form</Text>
            </View>
        )
    }
}

const styles = _ContactForm