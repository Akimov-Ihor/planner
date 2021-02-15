import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Planner from './components/Planner';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from './store/store'
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Planner />
    </Provider>

  </BrowserRouter>
  , document.getElementById('root')
);

reportWebVitals();
