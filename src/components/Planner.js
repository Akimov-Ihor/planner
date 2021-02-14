import React, { useState } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import './Planner.css';
import Login from './Login/Login';
import Main from '../components/Profile/Main/Main'
import Calendar from '../components/Profile/Calendar/Calendar'

const Planner = () => {
  const [isAuth, setIsAuth] = useState(true)
   if(isAuth ){
     
   }
  return (
    <div className='plannerWrapper'>
      <h1>Your Planner</h1>
      {isAuth
        ? <nav>
          <ul>
            <li>
              <NavLink to="/main">Main</NavLink>
            </li>
            <li>
              <NavLink to="/calendar">Planner</NavLink>
            </li>
            <li onClick={() => setIsAuth(!isAuth)}>
              <NavLink to="/login">Logout</NavLink>
            </li>
          </ul>
        </nav>
       :null }

      <Switch>
        <Route path="/main" render={() => <Main />} />
        <Route path="/calendar" render={() => <Calendar />} />
        <Route path='/login' render={() => <Login setIsAuth={setIsAuth} isAuth={isAuth}/>} />
      </Switch>
    </div>
  );
}

export default Planner;
