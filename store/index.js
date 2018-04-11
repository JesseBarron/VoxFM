import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const middleware = applyMiddleware(thunkMiddleware)

export default store = createStore(rootReducer, middleware)

export * from './reducers/facebookFeed'
export * from './reducers/streamInfo'