// import { ShoutStreamer } from '../../utility'

// const URL = "http://www.indahosting.net:8128/;"
// const SET_STREAMER_STATE = 'SET_STREAMER_STATE'

// const setStreamerState = (toggle) => ({
//     type: SET_STREAMER_STATE,
//     toggle: toggle == 'pause' ? false : true 
// })

// const reducerMethods = {
//     SET_STREAMER_STATE(state, action) {
//         return action.toggle
//     }
// }

// export default (state = false, action) => {
//     if(reducerMethods.action[type]) return reducerMethods.action[type](state, action)
//     return state
// }

// export const togglePlayer = (toggle) => 
//     dispatch => {
//         toggle == 'pause' ? ShoutStreamer.pause() : ShoutStreamer.play()
//     }