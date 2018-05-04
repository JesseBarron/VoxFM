import { streamURlService } from '../../clientServices'


const GET_STREAM_URL = 'GET_STREAM_URL'

const getStreamURL = (url) => ({
    type: GET_STREAM_URL,
    url
})


const reducerMethods = {
    GET_STREAM_URL(state, action) {
        return action.url
    }
}


export default (state =  '', action) => {
    const { type } = action
    if(reducerMethods[type]) return reducerMethods[type](state, action)
    return state
}

export const fetchStreamURL = () =>
   async dispatch => {
        try{
            const streamURL = await streamURlService.find()
            dispatch(getStreamURL(streamURL))
        } catch(e) {
            console.log(e)
        }
    }