import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { plannerReducer } from './reducers/plannerReducer';

export const store = createStore(plannerReducer, applyMiddleware(thunk));
