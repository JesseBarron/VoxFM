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
    pauseButton: {
        display: 'flex',
        flexDirection: 'row',
    },
    songInfo: {
        marginLeft: 10
    },
    artistName: {
        color: color.yellow,
        ...Platform.select({
            ios: {
                fontFamily: 'Heiti SC',
            },
            android: {
                fontFamily: 'sans-serif-medium'
            }
        }),
        fontSize: 15
    },
    songTitle: {
        color: color.blue,
        ...Platform.select({
            ios: {
                fontFamily: 'Heiti SC',
            },
            android: {
                fontFamily: 'Roboto'
            }
        }),
        fontSize: 15
    }
})