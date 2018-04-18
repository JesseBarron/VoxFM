import {
    StyleSheet,
    Platform
} from 'react-native'

import Color from '../../constants/colors'
const OS = Platform.OS
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff9f2',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,        
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width:0,height: 2},
                shadowOpacity: .8,
                shadowRadius: 8,
            },
            android: {
                elevation: 5
            }
        })
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%', 
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: .5,
                shadowRadius: 3,
            },
            android: {
                elevation: 5
            }
        }),
        margin: 15,
        padding: 15
    },
    textContainer: {
        backgroundColor: '#e5e0da',
        width: '100%',
        borderRadius: 2,
        padding: 10
    },
    text: {
        fontFamily: 'PingFang HK',
        fontSize: 15
    },
    videoContainer: {
        flex: 1,
        alignItems: 'center',
        height: 200,
        width: 420,
    },
    profileImage: {
        height: 80, 
        width: 80, 
        borderRadius: 40, 
        marginBottom: 10
    },
    backgroundImage: {
        width: '84%',
        height: '99%',
        overflow: 'hidden',
        position: 'absolute',
        zIndex: -5,
    },
    thumbnailImage: {
        flex: 1,
        zIndex: 100,
        width: '100%',
        height: '100%'
    }
})
