import {
    StyleSheet,
    Platform
} from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.headerBlack,
    },
    logoContianer: {
        flex: 1,
    },
    logo: {
        flex: 1,
        width: 160
    },
    socials: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 20
    },
    callBttn: {
        right: 3,
        margin: 5,
        padding: 8,
        backgroundColor: colors.yellow,
        borderRadius: 70, 

    }
})