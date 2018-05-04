import {
    Platform,
    NativeModules
} from 'react-native'

const OS = Platform.OS

export const ShoutStreamer = OS == 'ios'
        ? NativeModules.ShoutStreamerIOS
        : NativeModules.ShoutStreamerAndroid
