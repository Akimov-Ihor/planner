import React  from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import './Planner.css';
import Login from './Login/Login';
import Main from '../components/Profile/Main/Main'
import Calendar from '../components/Profile/Calendar/Calendar'
import { set_isAuth } from '../store/actionCreators/plannerCreators';
import { useHistory } from "react-router-dom";

const Planner = () => {
   const isAuth = useSelector(state=>state.isAuth)
   const dispatch = useDispatch()
   const history = useHistory();
  
   if(!isAuth){
    history.push("/login");
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
            <li onClick={()=>dispatch(set_isAuth(!isAuth))}>
              <NavLink to="/login">Logout</NavLink>
            </li>
          </ul>
        </nav>
       :null }

      <Switch>
        <Route path="/main" render={() => <Main />} />
        <Route path="/calendar" render={() => <Calendar />} />
        <Route exact path='/login' render={() => <Login  isAuth={isAuth}/>} />
      </Switch>
    </div>
  );
}

export default Planner;
