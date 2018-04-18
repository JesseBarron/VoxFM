import {
    StyleSheet,
    Platform
} from 'react-native'
import color from '../../constants/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0, 0.9)',
    },
    songInfo: {
        marginLeft: 10
    }
})