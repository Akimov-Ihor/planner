import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { plannerReducer } from './reducers/plannerReducer';
import { verifyAuth } from './actionCreators/plannerCreators';
import { initialState } from './initialState';

const enhancers = [devToolsEnhancer()];

const middleware = [thunk];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export const store = (function configureStore() {
  const reduxStore = createStore(
    plannerReducer,
    initialState,
    composedEnhancers,
  );
  reduxStore.dispatch(verifyAuth());
  return reduxStore;
}());
