import { StackNavigator } from 'react-navigation'

import {
    AppContainer,
    VideoPlayerComponent
} from '../screens'

const stack = {
    Home: {
        screen: AppContainer
    },
    VideoPlayer: {
        screen: VideoPlayerComponent
    }
}

export default StackNavigator(stack,{
    headerMode: 'screen'
})