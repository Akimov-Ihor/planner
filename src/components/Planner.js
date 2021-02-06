import Login from './Login/Login';
import Profile from './Profile/Profile'
import {Route} from 'react-router-dom'
import './Planner.css';

const Planner = () => {
  
  return (
    <div className="Planner">
      <Route path='/login'
        render={() => <Login />}/>
       <Route exact path='/'
        render={() => <Profile />}/>
      
    </div>
  );
}

export default Planner;
