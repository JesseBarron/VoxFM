import {
    StyleSheet,
    Platform
} from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
    modal: {
        justifyContent: 'center',
        backgroundColor: 'rgba(34,34,34,.8)',
    },
    header: {
        flex: 1
    },
    artwork: {
        flex: 3, 
        display:'flex', 
        alignItems: 'center',
        backgroundColor: 'rgba(34,34,34, .8)',
        borderTopColor: 'white',
        borderTopWidth: .5,
        borderBottomColor: 'white',
        borderBottomWidth: .5,
        
    },
    player: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    songInfo: {
        marginTop: 20,
        alignItems: 'center'
    },
    songText: {
        fontSize: 15,
        color: 'white',
    },
    songTitle: {
        // color: 'blue'
    },
    songArtist: {
        marginTop: 10
        // color: 'pink'
    }
})