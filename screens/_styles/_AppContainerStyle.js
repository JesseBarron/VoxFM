import { 
    StyleSheet,
    Platform
} from 'react-native'

import colors from '../../constants/colors'


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.bkgrPurple,
        top: Platform.OS == 'ios' ? 20 : 0
    }
})