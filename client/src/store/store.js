import { createStore } from 'redux';
import { plannerReducer } from './reducers/plannerReducer';

export const store = createStore(plannerReducer);
