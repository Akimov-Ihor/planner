import React from 'react'
import { NavLink, Route, Switch, BrowserRouter, } from 'react-router-dom'
import Login from './Login/Login'
import Main from './Main/Main'
import Planner from './Calendar/Calendar'
import './Profile.css'





const Profile = () => {
   return (
      <div>
         <BrowserRouter>
            <nav>
               <ul>
                  <li>
                     <NavLink to="/main">Main</NavLink>
                  </li>
                  <li>
                     <NavLink to="/planner">Planner</NavLink>
                  </li>
                  <li>
                     <NavLink to='/login'>Logout</NavLink>
                  </li>
               </ul>

            </nav>
            <Switch>
               <Route path="/main" render={() => <Main />} />
               <Route path="/planner" render={() => <Planner />} />
               <Route path= "/login" render={()=> <Login/>}/>
            </Switch>
         </BrowserRouter>
      </div>


   )
}

export default Profile