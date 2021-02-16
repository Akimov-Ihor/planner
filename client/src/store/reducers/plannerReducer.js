import * as types from '../actionsTypes/plannerTypes';
import { initialState } from '../initialState';

export const plannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_IS_AUTH:
    {
      return {
        ...state,
        isAuth: action.payload,
      };
    }
    case types.SET_USER:
    {
      return {
        ...state,
        user: action.payload,
      };
    }
    case types.SET_PLANN:
    {
      return {
        ...state,
        plansList: [...state.plansList, action.payload],
      };
    }
    case types.SET_ALL_PLANS:
    {
      return {
        ...state,
        plansList: [...action.payload],
      };
    }
    case types.FILTER_PLAN:
    {
      return {
        ...state,
        plansList: [...action.payload],
      };
    }
    default:
      return state;
  }
};
