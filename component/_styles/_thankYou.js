import {
    StyleSheet,
    Platform
} from 'react-native'
import color from '../../constants/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color: 'green',
        textAlign: 'center'
    }
})