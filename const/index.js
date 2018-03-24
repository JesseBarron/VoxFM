import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const dimensions = {
    width, 
    height
}

export const colors = {
    yellow: '#F0E665',
    yellow_transparent: 'rgba(240,230,101,.7)',
    orange: '#D06D4C',
    red: 'rgba(218,95,43,0.8)',
    cardBG: '#FFE8D8',
    appBG: '#CDCDCD'
}