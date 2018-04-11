import { fbFeedService } from '../../clientServices'


const initState = {
    feed: [],
    nextPage: '' 
}
/**
 * Actions
 */
const GET_FEED = 'GET_FEED'


/**
 * ActionCreators
 */

export const getFeed = (feed) => ({
    type: GET_FEED,
    feed
})


/**
 * Reducer and methods
 */

const reduceMethods = {
    GET_FEED(state, action) {
        let { feed, nextPage } = action.feed
        return Object.assign(state, action.feed)
    }
}

export default (state = initState, action) => {
    let newState = Object.assign({}, state)
    let type = action.type
    if(reduceMethods[type]) {
       return reduceMethods[type](newState, action)
    }
    return state
}

/**
 * Thunks
 */

export const fetchFeed = () =>
   async dispatch => {
        let feed = await fbFeedService.find()
        let action = getFeed(feed)
        dispatch(action)
    }