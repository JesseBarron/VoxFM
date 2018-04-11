import {
    getCurrentSong,
    fetchCurrentSong
} from '../reducers/streamInfo'
import reducer from '../reducers/streamInfo'
import mockStore from '../../_mocks/redux-mock-store'


describe('StreamInfo Actions', () => {
    it('getCurrentSong should return GET_CURRENT_SONG action', () => {
        const songTitle = "Jesse - Mr. Fahrenheit"
        const expectedAction = {
            type: "GET_CURRENT_SONG",
            currentSong: songTitle
        }
        expect(getCurrentSong(songTitle))
            .toEqual(expectedAction)
    })
    it('getCurrentSong should have currentSong prop with a string value', () => {
        const songTitle = "Jesse - Mr. Fahrenheit"
        const expectedAction = {
            type: "GET_CURRENT_SONG",
            currentSong: songTitle
        }
        expect(getCurrentSong(songTitle).currentSong)
            .toEqual(songTitle)
    })
})

describe('StreamInfo Thunks', () => {
    const store = mockStore({
        currentSong: ''
    })
    it('fetchCurrentSong should use GET_CURRENT_SONG action', () => {
        return store.dispatch(fetchCurrentSong())
            .then(() => {
                expect(store.getActions()[0].type)
                    .toEqual('GET_CURRENT_SONG')
            })
    })
    it('fetchCurrentSong should fetch a currentSong prop with a string value', () => {
        return store.dispatch(fetchCurrentSong())
            .then(() => {
                expect(typeof store.getActions()[0].currentSong)
                    .toBe('string')
            })
    })
})

describe('StreamInfo Reducer', () => {
    it('Should return a string "VoxFM" as the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual('VoxFM')
    })
    it('Should handle GET_CURRENT_SONG and Update the State', () => {
        const initState = "Jesse - Old Song"
        let action = {
            type: "GET_CURRENT_SONG",
            currentSong: "Jesse - New Song"
        }
        expect(reducer(initState, action))
            .toEqual(action.currentSong)
    })
})