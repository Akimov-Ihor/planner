import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Form, Header, Segment,
} from 'semantic-ui-react';

import { useHistory } from 'react-router';

import { setIsAuth } from '../../store/actionCreators/plannerCreators';

import './Login.css';

const ADMIN = 'admin';

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const checkForm = (event) => {
    event.preventDefault();
    if (login === ADMIN && password === ADMIN) {
      setIsAuth(true, dispatch);
      return history.push('/');
    }
    setLogin('');
    return setPassword('');
  };
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
            <Button type="submit" color="teal" fluid size="large" onClick={checkForm}>
              Login
            </Button>
          </Segment>
        </Form>
      </div>
    </div>
  );
};
