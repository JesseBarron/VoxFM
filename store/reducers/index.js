import { combineReducers } from 'redux'
import fbFeed from './facebookFeed'
import currentSong from './streamInfo'
import streamURL from "./streamURL"

export default rootReducer = combineReducers({
    fbFeed,
    currentSong,
    streamURL
})