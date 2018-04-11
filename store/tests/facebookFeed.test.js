import reducer, {
    fetchFeed,
    getFeed
} from '../reducers/facebookFeed'
import mockStore from '../../_mocks/redux-mock-store'

describe('fbFeed Actions', () => {
    it('getFeed should create a getFeed action', () => {
        const data = {
            feed: [],
            nextPage: ''
        }
        const expectedAction = {
            type: "GET_FEED",
            feed: data
        }
        expect(getFeed(data))
            .toEqual(expectedAction)
    })
})

describe('fbFeed Thunks', () => {
    const store = mockStore({
        fbFeed: {}
    })
    it('Should use the GET_FEED Action', () => {
        return store.dispatch(fetchFeed())
            .then(() => {
                expect(store.getActions()[0].type)
                    .toEqual("GET_FEED")
            })
    })
    it('Should Have Feed object with feed Array', () => {
        return store.dispatch(fetchFeed())
            .then(() => {
                expect(Array.isArray(store.getActions()[0].feed.feed))
                    .toBe(true)
            })
    })
    it('Should have a feed object with a nextPage String', () => {
        return store.dispatch(fetchFeed())
            .then(() => {
                expect(typeof store.getActions()[0].feed.nextPage)
                    .toEqual('string')
            })
    })
})

describe('fbFeed Reducer', () => {
    const initState = {
        feed: [],
        nextPage: ''
    }
    it('Should return initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual({
                feed: [],
                nextPage: ''
            })
    })
    it('Should handle GET_FEED', () => {
        const get_feed = {
            type: "GET_FEED",
            feed: {
                feed: [
                    {item: "This is item 0"},
                    {item: "This is item 1"},
                ],
                nextPage: "This is the url to the next page"
            }
        }
        expect(reducer(sate = initState, get_feed))
            .toEqual(get_feed.feed)
    })
    it('Should Update State on GET_FEED', () => {
        const prevState = {
            feed: [
                {item: "This is item 0"},
                {item: "This is item 1"},
            ],
            nextPage: "This is the url to the next page"
        }
        const get_feed = {
            type: "GET_FEED",
            feed: {
                feed: [
                    {item: "This is updated item 0"},
                    {item: "This is updated item 1"},
                ],
                nextPage: "This is the next url"
            }
        }
        expect(reducer(state = prevState, get_feed))
            .toEqual(get_feed.feed)
    })

})