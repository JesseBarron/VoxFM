import {
    voxInfoService
} from '../../clientServices'

const initState = {
    currentSong: 'VoxFM',
    artwork: null
}
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

export default (state = initState, action) => {
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
            console.log(currentSong)
            let action = getCurrentSong(currentSong)
            dispatch(action)
            return currentSong
        } catch(e) {
            console.error(e)
        }
    }