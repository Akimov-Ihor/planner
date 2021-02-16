import * as types from '../actionsTypes/plannerTypes';

export const setIsAuth = (value, dispatch) => {
  console.log(123);
  dispatch({ type: types.SET_IS_AUTH, payload: value });
};
export const SET_PLANN = (value) => ({ type: types.SET_PLANN, payload: value });
export const FILTER_PLAN = (value) => ({ type: types.FILTER_PLAN, payload: value });
export const setUser = (value) => ({ type: types.SET_USER, payload: value });
