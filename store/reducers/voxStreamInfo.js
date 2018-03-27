import { voxStreamInfo } from '../../clientServices'


const GET_STREAM_INFORMATION = 'GET_STREAM_INFORMATION'

const getStreamInformation = currentSong => ({
    type: GET_STREAM_INFORMATION,
    currentSong,
})

const reducerMethods = {
    GET_STREAM_INFORMATION(state, { currentSong }) {
        return currentSong
    }
}

export default (state= '', action) => {
    if (reducerMethods[action.type]) return reducerMethods[action.type](state, action)
    return state
}


export const fetchStreamInformation = () =>
    async dispatch => {
        try {
            const currentSong = await voxStreamInfo.find()
            const action = getStreamInformation(currentSong)
            dispatch(action)
            return currentSong
        } catch(err) {
            console.log(err)
        }
    }


