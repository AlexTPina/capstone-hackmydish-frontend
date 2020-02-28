import { createStore, combineReducers, applyMiddleware } from 'redux'
import recipesReducer from './recipes/reducer'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  recipes: recipesReducer,
})

const middleware = [thunk, logger]

export default createStore(rootReducer, applyMiddleware(...middleware))