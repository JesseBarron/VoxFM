import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Button,
    Keyboard
} from 'react-native'

import { _ContactForm } from './_styles'
import { emailService } from '../clientServices'
import { ThankYou, Form } from '../component'

const _backButton = ({back, navigate}) => {
    return (
        <TouchableOpacity style={styles.backButton} onPress={() => back()}> 
            <Icon name="chevron-left" size={40} />
        </TouchableOpacity>
    );
}

export default class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            topic: '',
            subject: '',
            message: '',
            disableButton: true,
            validEmail: '',
            emailSent: false
        }
    }
    static navigationOptions = ({ navigation }) =>  {
        const params = navigation.state.params || {}
        return {
            headerTitle: 'Formulario de contacto',
            headerLeft: (
                <_backButton back={navigation.goBack} />
            ),
            headerRight: (
                <View style={{ marginRight: 10 }} >
                    <Button 
                        onPress={params.handleSubmit}
                        title="Enviar"
                        disabled={params.disabled}
                    />
                </View>
            )
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            handleSubmit: this.handleSubmit,
            disabled: this.state.disableButton
        })
    }

    handleInputChange = (text, field) => {
        this.setState({ [field]: text }, () => this.validate(field))
    }

    handleTopic = (topic) => {
        this.setState({ topic }, () => this.validate())
    }
    // Messy........
    validate = (field) => {
        const { validEmail, email, lastName, firstName, message, topic } = this.state
        if(field == 'email') {
            const regex = /^.+@.+\..+$/
            regex.test(this.state.email) 
                ? this.setState({validEmail: 'valid'}) 
                : this.setState({validEmail: 'invalid'})
        }
        if(validEmail == 'valid' && lastName && firstName && message && topic) {
            this.setState({ disableButton: false }, () => this.props.navigation.setParams({ disabled: false }))
            return true
        } else {
            this.setState({ disableButton: true }, () => this.props.navigation.setParams({ disabled: true }))
            return false
        }
    }

    handleSubmit = () => {
        if(!this.validate()) {
            this.setState({ disableButton: true }, () => this.props.navigation.setParams({disabled: true}))
        } else {
            this.sendMail()
        }
    }

    sendMail = async () => {
        try {
            const { disableButton, validEmail, ...message } = this.state
            const response = await emailService.create(message)
            if(response.accepted.length > 0) {
                this.setState({emailSent: true}, () => {
                    setTimeout(() => {
                        this.props.navigation.goBack()
                    }, 1000)
                })
            }
        } catch(e) {
            console.log(e)
        }
    }

    render() {
        const { firstName, lastName, email, message, subject, validEmail, emailSent, topic } = this.state
        return (
            <View style={styles.container}>
                {
                    emailSent
                    ? <ThankYou />
                    : <Form 
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        topic={topic}
                        handleTopic={this.handleTopic}
                        message={message}
                        subject={subject}
                        validEmail={validEmail}
                        handleInputChange={this.handleInputChange}
                    />
                }
            </View>
        )
    }
}

const styles = _ContactForm