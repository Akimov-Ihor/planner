import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {
  Button, Form, Header, Segment,
} from 'semantic-ui-react';

import { setIsAuth } from '../../store/actionCreators/plannerCreators';

import './Login.css';

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const checkForm = async (event) => {
    event.preventDefault();
    await setIsAuth({
      isAuth: true, username, password, history,
    })(dispatch);
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
              value={username}
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
