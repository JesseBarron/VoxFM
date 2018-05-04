import React,{ Component } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import call from 'react-native-phone-call'
import colors from '../constants/colors'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'

import SocialBttns from './socialBttns'
import { _headerStyle } from './_styles'

const callStation = () => {
    const args = {
        number: '3124730689',
        prompt: true
    }
    call(args)
        .catch(console.err)
}

export default Header = (props) => {
    const { goTo, navigation } = props
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.logoContianer} onPress={() => goTo('voxfm')}  >
                <Image
                    source={require('../assets/voxfmImage_Alpha.png')}
                    style={styles.logo}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
            <View style={styles.socials}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.callBttn} onPress={() => callStation()} >
                        <Icon name="phone-call" color={colors.headerBlack}  size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callBttn} onPress={() => navigation.navigate('ContactForm')} >
                        <Icon name="mail" color={colors.headerBlack}  size={30} />
                    </TouchableOpacity>
                </View>
                <SocialBttns goTo={goTo}/>
            </View>
        </View>
    )
}

const styles = _headerStyle