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
    case types.setPlann:
    {
      return {
        ...state,
        plansList: [...state.plansList, action.payload],
      };
    }
    case types.filterPlann:
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
