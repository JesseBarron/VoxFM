import { voxStreamInfo } from '../../clientServices'

const initState = {
    currentSong: '',
    genre: ''
}

const GET_STREAM_INFORMATION = 'GET_STREAM_INFORMATION'

const getStreamInformation = ({currentSong, genre}) => ({
    type: GET_STREAM_INFORMATION,
    currentSong,
    genre
})

const reducerMethods = {
    GET_STREAM_INFORMATION(state, {genre, currentSong}) {
        return Object.assign({}, state, {genre, currentSong})
    }
}

export default (state= initState, action) => {
    if (reducerMethods[action.type]) return reducerMethods[action.type](state, action)
    return state
}

export const fetchStreamInformation = () =>
    async dispatch => {
        try {
            const result = await voxStreamInfo.find()
            const { currentSong, genre } = result
            const action = getStreamInformation({ currentSong, genre })
            console.log(action)
            dispatch(action)
        } catch(err) {
            console.log(err)
        }
    }

