import { Platform, NativeModules } from 'react-native'


export const ShoutStreamer = Platform.OS === 'ios' ? NativeModules.ShoutStreamerIOS : null
