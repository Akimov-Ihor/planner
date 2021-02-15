import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Form, Header, Segment,
} from 'semantic-ui-react';
import { setIsAuth } from '../../store/actionCreators/plannerCreators';

import './Login.css';

const ADMIN = 'admin';

export const Login = () => {
  const history = useHistory();

  const isAuth = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const checkForm = () => {
    if (login === ADMIN && password === ADMIN) {
      dispatch(setIsAuth(!isAuth));
      history.push('/main');
    }
    setLogin('');
    setPassword('');
  };
  if (isAuth) {
    <Redirect push to="/main" />;
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {/* <Button color='teal' fluid size='large' onClick={() => setIsAuth(!isAuth)}> */}
            <Button color="teal" fluid size="large" onClick={checkForm}>
              Login
            </Button>
          </Segment>
        </Form>
      </div>
    </div>
  );
};
