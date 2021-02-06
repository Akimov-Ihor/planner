import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Planner from './components/Planner';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
     <Planner />
  </BrowserRouter>
    ,document.getElementById('root')
);

reportWebVitals();
