import {
    fbFeedService
} from '../../clientServices'


const initState = {
    feed: [],
    nextPage: ''
}
/**
 * Actions
 */
const GET_FEED = 'GET_FEED'
const UPDATE_FEED = "UPDATE_FEED"

/**
 * ActionCreators
 */

export const getFeed = (feed) => ({
    type: GET_FEED,
    feed
})

export const updateFeed = (feed) => ({
    type: UPDATE_FEED,
    feed
})

/**
 * Reducer and methods
 */

const reduceMethods = {
    GET_FEED(state, action) {
        let {
            feed,
            nextPage
        } = action.feed
        state.feed = [...state.feed,...feed]
        state.nextPage = nextPage
        return state
    },
    UPDATE_FEED(state, action) {
        let {
            feed,
            nextPage
        } = action.feed
        return Object.assign({}, state, [...state.feed, ...feed], nextPage)
    }
}

export default (state = initState, action) => {
    let newState = Object.assign({}, state)
    let type = action.type
    if (reduceMethods[type]) {
        return reduceMethods[type](newState, action)
    }
    return state
}

/**
 * Thunks
 */

export const fetchFeed = (url) =>
    async dispatch => {
        let feed = await fbFeedService.find({query:{url}})
        let action = getFeed(feed)
        dispatch(action)
        return feed
    }