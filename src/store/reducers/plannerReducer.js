import * as types from '../actionsTypes/plannerTypes'
import { initialState } from '../initialState'

export const plannerReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_IS_AUTH:
            {
                return {
                    ...state,
                    isAuth: action.payload
                }
            }
        case types.SET_PLANN:
            {
                return {
                    ...state,
                    planns:[...state.planns,action.payload]
                }
            }

        default:
            return state;
    }


}