import Login from './Login/Login';
import Profile from './Profile/Profile'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './Planner.css';

const Planner = () => {

  return (
    <div className='plannerWrapper'>
      <h1>Your Planner</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Profile />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default Planner;
