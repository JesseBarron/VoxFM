import {
    StyleSheet,
    Platform
} from 'react-native'
import color from '../../constants/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                bottom: 10
            }
        }),
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0, 0.7)'
    },
    
})