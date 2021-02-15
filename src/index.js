import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Planner } from './components/Planner.jsx';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Planner />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

reportWebVitals();
