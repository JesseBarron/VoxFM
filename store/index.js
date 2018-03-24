import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
 
const middleware = applyMiddleware(thunkMiddleware, logger)

const store = createStore(rootReducer, middleware)

export default store
export * from './reducers/voxFBFeed'
export * from './reducers/voxStreamInfo'
