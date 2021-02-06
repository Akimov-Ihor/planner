import React from 'react'
import {NavLink ,Route,Switch,BrowserRouter} from 'react-router-dom'
import About from './About/About'
import Planner from './Planner/Planner'
import Home from './Home/Home'

const Profile = () => {
   return (
      <BrowserRouter>
         <nav>
            <div>
               <NavLink  to="/home">Home</NavLink>
            </div>
            <div>
               <NavLink  to="/about">About</NavLink>
            </div>
            <div>
               <NavLink  to="/planner">Planner</NavLink>
            </div>
         </nav>
         <div>Profile</div>

         <Switch>
          <Route  path="/home"  render={() => <Home />}/>
          <Route  path="/about" render={() => <About />}/>
          <Route  path="/planner"render={() => <Planner />}/>
        </Switch>
      </BrowserRouter>

   )
}

export default Profile