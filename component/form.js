import React, { Component } from 'react'
import SmartPicker from 'react-native-smart-picker'
import {
    View,
    TextInput,
    Text,
    Picker,
    ScrollView
} from 'react-native'

import { _form } from './_styles'
import colors from '../constants/colors';

export default Form = ({firstName, lastName, email, subject, message, handleInputChange, handleTopic, validEmail, topic}) => {
    return (
        <ScrollView>
            <View style={styles.nameInput}>
                <View style={styles.inputContainer} >
                    <Text style={styles.label}>Nombre:</Text>
                    <TextInput 
                        onChangeText={(text) => handleInputChange(text, 'firstName')} 
                        style={[styles.input]} 
                        clearButtonMode="while-editing" 
                        value={firstName}
                    />
                </View>
                <View style={styles.inputContainer} >
                    <Text style={styles.label} >Apellido:</Text>                        
                    <TextInput 
                        onChangeText={(text) => handleInputChange(text, 'lastName')} 
                        style={[styles.input]} 
                        clearButtonMode="while-editing" 
                        value={lastName}
                    />
                </View>               
            </View>
            <View style={styles.emailContainer}>
                <Text style={styles.label} >Correo Electrónico:</Text>                    
                <TextInput
                    underlineColorAndroid={colors.headerBlack}
                    onChangeText={(text) => handleInputChange(text, 'email')} 
                    style={[styles.input, styles[validEmail]]}
                    value={email}
                    keyboardType="email-address"
                />                    
            </View>
            <View style={styles.emailContainer}>
                <Text style={styles.label} >Departamento:</Text>
                <SmartPicker
                    selectedValue={topic}
                    onValueChange={(value) => handleTopic(value)}
                    style={styles.input}
                    iosBoxStyle={{backgroundColor: colors.blue}}
                    androidBoxStyle={{backgroundColor: colors.blue}}
                    label={topic || "Seleccione un departamento"}
                    arrowColor="black"
                >
                    <Picker.Item label="General" value="General" />                    
                    <Picker.Item label="Programación" value="Programación" />
                    <Picker.Item label="Ventas" value="Ventas" />
                </SmartPicker>                                       
            </View>
            <View style={styles.emailContainer}>
                <Text style={styles.label} >Sujeto:</Text>
                <TextInput 
                    onChangeText={(text) => handleInputChange(text, 'subject')} 
                    style={[styles.input]}
                    value={subject}
                />                              
            </View>
            <View style={styles.messageContainer}>
                <Text style={styles.label} >Mensaje:</Text>                                        
                <TextInput 
                    onChangeText={(text) => handleInputChange(text, 'message')} 
                    style={[styles.input, styles.message]} 
                    multiline={true}
                    placeholder="Mensaje...."
                    value={message}
                    placeholderTextColor="#a5b7cc"
                />                
            </View>
        </ScrollView>
    )
}

const styles = _form