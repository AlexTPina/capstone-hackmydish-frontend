import * as types from './constants'

const initialState = {
  all: [],
  err: {},
  one: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_RECIPES_PENDING:
    case types.ADD_RECIPE_PENDING:
    case types.REMOVE_RECIPE_PENDING:
    case types.UPDATE_RECIPE_PENDING:
    case types.FETCH_ONE_RECIPE_PENDING:
      return state

    case types.FETCH_ALL_RECIPES_FAILED:
    case types.ADD_RECIPE_FAILED:
    case types.REMOVE_RECIPE_FAILED:
    case types.UPDATE_RECIPE_FAILED:
    case types.FETCH_ONE_RECIPE_FAILED:
      return {
        ...state,
        err: action.payload,
      }
    case types.FETCH_ONE_RECIPE_SUCCESS:
      return {
        ...state,
        one: action.payload,
      }
    
    
    case types.FETCH_ALL_RECIPES_SUCCESS:
      return {
        ...state,
        all: action.payload,
      }

    case types.ADD_RECIPE_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all],
      }

    case types.REMOVE_RECIPE_SUCCESS:
      return {
        ...state,
        all: state.all.filter(recipe => recipe.id !== Number(action.payload)),
      }
    
    case types.UPDATE_RECIPE_SUCCESS:
      return {
        ...state,
        all: [
          ...state.all.filter(recipe => recipe.id !== action.payload.id),
          action.payload
        ]
      };
    
    default:
      return state
  }
}