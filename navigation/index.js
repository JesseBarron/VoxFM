import { Navigation } from 'react-native-navigation'

import LandingPage from './landing'
import Page2 from './page2'

export function registerScreens() {
    Navigation.registerComponent('main.landing', () => LandingPage)
    // Navigation.registerComponent('main.page2', () => Page2)
}