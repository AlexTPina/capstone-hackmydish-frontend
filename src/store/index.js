import { createStore, combineReducers, applyMiddleware } from 'redux'
import recipesReducer from './recipes/reducer'
// import statusesReducer from './statuses/reducer'
// import commentsReducer from './comments/reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  recipes: recipesReducer,
//   statuses: statusesReducer,
//   comments: commentsReducer,
})

const middleware = [thunk, logger]

export default createStore(rootReducer, applyMiddleware(...middleware))