import * as types from '../actionsTypes/plannerTypes';

export const setIsAuth = (value) => ({ type: types.SET_IS_AUTH, payload: value });
export const setPlan = (value) => ({ type: types.SET_PLANN, payload: value });
export const filterPlan = (value) => ({ type: types.FILTER_PLAN, payload: value });
export const setUser = (value) => ({ type: types.SET_USER, payload: value });
export const setAllPlans = (value) => ({ type: types.SET_ALL_PLANS, payload: value });
