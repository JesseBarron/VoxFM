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
        backgroundColor: "#222222"

    },
    logoContianer: {
        flex: 2,
    },
    logo: {
        flex: 1,
        width: 160
    },
    socials: {
        flex: 1,
        marginRight: 20
    }
})