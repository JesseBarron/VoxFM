import { StackNavigator } from 'react-navigation'

import { AppContainer, VideoPlayer } from '../components'
import LandingPage from './landing'
import Page2 from './page2'

export default RootStack = StackNavigator({
    Home: {
        screen: AppContainer
    },
    VideoPlayer: {
        screen: VideoPlayer
    }
})
