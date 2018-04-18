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
        paddingTop: 20,
        paddingBottom: 10 
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
        marginRight: 20,
    },
    callBttn: {
        right: 6,
        margin: 5,
        padding: 5,
        backgroundColor: colors.yellow,
        borderRadius: 70, 

    }
})