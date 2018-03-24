import axios from 'axios'
import { fbFeedService } from '../../clientServices'
const initState = {
    feed: [],
    nextPage: ''
}

/**
 * ACTIONS
 */

const   GET_FEED = 'GET_FEED'

/**
 * ACTION CREATORS
 */

const getFeed = feed => ({
    type: GET_FEED,
    feed
})

/**
 * REDUCERS
 */

const reducerMethods = {
    GET_FEED(state, action) {
        return action.feed
    },
}

export default (state = initState, action) => {
    if (reducerMethods[action.type]) return reducerMethods[action.type](state, action)
    return state
}

/**
 * THUNKS
 */

export const fetchFeed = () =>
    async dispatch => {
       try {
           const data = await fbFeedService.find()
           const action = getFeed(data)
           dispatch(action)
           return data
       } catch(err) {
           console.log(err)
       }
    }