import { Platform } from 'react-native'
import _ from 'lodash'
import {ShoutStreamer} from '../../utility'
import { socket } from '../../clientServices'
import {
    voxInfoService
} from '../../clientServices'


/**
 * ACTIONS
 */

const GET_CURRENT_SONG = "GET_CURRENT_SONG"

/**
 * ACTION CREATORS
 */

export const getCurrentSong = (currentSong) => ({
    type: GET_CURRENT_SONG,
    currentSong
})

/**
 * REDUCER
 */

const reducerMethod = {
    GET_CURRENT_SONG(state, action) {
        return action.currentSong
    }
}

export default (state = 'VoxFM', action) => {
    if (reducerMethod[action.type]) {
        return reducerMethod[action.type](state, action)
    }
    return state
}

/**
 * TUNKS
 */
export const fetchCurrentSong = (currentSong) =>
    async dispatch => {
        try{
            let currentSong = currentSong || await voxInfoService.find()
            let action = getCurrentSong(currentSong)
            dispatch(action)
            return currentSong
        } catch(e) {
            console.error(e)
        }
    }

// export const listenForSongUpdate = () => {
//     const OS = Platform.OS
//     console.log('registered listener')
    
// }