import * as types from '../actionsTypes/plannerTypes';

export const setIsAuth = (value, dispatch) => {
  console.log(123);
  dispatch({ type: types.SET_IS_AUTH, payload: value });
};
export const setPlann = (value) => ({ type: types.setPlann, payload: value });
export const filterPlann = (value) => ({ type: types.filterPlann, payload: value });