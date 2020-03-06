import * as types from './constants'
import axios from 'axios'
import { BASE_URL } from './constants'

export const fetchAllRecipes = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_RECIPES_PENDING,
  })
  try {
    let response = await axios.get(BASE_URL)
    dispatch({
      type: types.FETCH_ALL_RECIPES_SUCCESS,
      payload: response.data,
    })
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_RECIPES_FAILED,
      payload: err,
    })
  }
}

export const fetchOneRecipe = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_RECIPE_PENDING,
  })
  try {
    let response = await axios.get(BASE_URL + `/${id}`)
    dispatch({
      type: types.FETCH_ONE_RECIPE_SUCCESS,
      payload: response.data,
    })
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_RECIPE_FAILED,
      payload: err,
    })
  }
}

export const addRecipe = (newRecipe, changeRoute) => async dispatch => {
  dispatch({
    type: types.ADD_RECIPE_PENDING,
  })
  try {
    let response = await axios.post(BASE_URL, newRecipe)
    dispatch({
      type: types.ADD_RECIPE_SUCCESS,
      payload: response.data,
    })
    changeRoute("/recipelist")
  } catch (err) {
    dispatch({
      type: types.ADD_RECIPE_FAILED,
      payload: err,
    })
  }
}

export const removeRecipe = id => async dispatch => {
  dispatch({
    type: types.REMOVE_RECIPE_PENDING,
  })
  try {
    let response = await axios.delete(BASE_URL + `/${id}`)
    dispatch({
      type: types.REMOVE_RECIPE_SUCCESS,
      payload: response.data,
    })
  } catch (err) {
    dispatch({
      type: types.REMOVE_RECIPE_FAILED,
      payload: err,
    })
  }
}

export const updateRecipe = (updateRecipe, id) => async dispatch => {
  dispatch({
    type: types.UPDATE_RECIPE_PENDING
  });

  try {
    let response = await axios.patch(BASE_URL + `/${id}`, updateRecipe)
    dispatch({
      type: types.UPDATE_RECIPE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.UPDATE_RECIPE_FAILED,
      payload: err
    });
  }
};