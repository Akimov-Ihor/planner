import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Planner } from './components/Planner.jsx';

import { store } from './store/store';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Planner />
    </Provider>
  </Router>,
  document.getElementById('root'),
);

reportWebVitals();
