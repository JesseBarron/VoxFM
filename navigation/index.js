import { StackNavigator } from 'react-navigation'

import {
    AppContainer,
    VideoPlayerComponent,
    ContactForm
} from '../screens'

const stack = {
    Home: {
        screen: AppContainer
    },
    ContactForm: {
        screen: ContactForm,
    },
    VideoPlayer: {
        screen: VideoPlayerComponent
    },
}

export default StackNavigator(stack,{
    headerMode: 'screen'
})