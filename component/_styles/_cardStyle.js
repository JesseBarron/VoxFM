import {
    StyleSheet,
    Platform
} from 'react-native'

import Color from '../../constants/colors'
const OS = Platform.OS
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: 15
    },
    videoContainer: {
        flex: 1,
        alignItems: 'center',
        height: 200,
        width: 420,
    },
    profileImage: {
        height: 50, 
        width: 50, 
        borderRadius: 23, 
        borderWidth: .23, 
        borderColor: 'black', 
        marginBottom: 10
    },
    backgroundImage: {
        width: 620,
        height: 500,
        position: 'absolute',
        zIndex: -2,
    },
    thumbnailImage: {
        flex: 1,
        zIndex: 100,
        width: '100%',
        height: '100%'
    }
})
