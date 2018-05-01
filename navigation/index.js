import { StackNavigator } from 'react-navigation'

import {
    AppContainer,
    VideoPlayerComponent,
    ContactForm
} from '../screens'

const stack = {
    ContactForm: {
        screen: ContactForm,
    },
    Home: {
        screen: AppContainer
    },
    VideoPlayer: {
        screen: VideoPlayerComponent
    },
}

export default StackNavigator(stack,{
    headerMode: 'screen'
})