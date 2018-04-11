import React,{ Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'

import SocialBttns from './socialBttns'
import { _headerStyle } from './_styles'

export default Header = ({goTo}) => {
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
                <SocialBttns goTo={goTo}/>
            </View>
        </View>
    )
}

const styles = _headerStyle