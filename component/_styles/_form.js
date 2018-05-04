import { 
    StyleSheet,
    Platform
} from 'react-native'

import colors from '../../constants/colors'

export default StyleSheet.create({
    container: {
        backgroundColor: colors.headerBlack,
        height: '100%'
    },
    backButton: {
        marginLeft: 10
    },
    nameInput: {
        display: 'flex',
        flexDirection: 'row',
        margin: 5
    },
    inputContainer: {
        flex: 1,
        width: '100%'
    },
    input: {
        height: 30,
        borderColor: colors.backgroundGrey,
        borderWidth: 1,
        margin: 5,
        paddingLeft: 10,
        color: colors.blue
    },
    message: {
        height: 150
    },
    valid: {
        borderColor: '#c7ffa3'
    },
    invalid: {
        borderColor: '#ff856d'
    },
    label: {
        color: colors.yellow
    },
    emailContainer: {
        margin: 5
    },
    messageContainer: {
        margin: 10
    }
})