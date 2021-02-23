import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  Button, Form, Header, Segment,
} from 'semantic-ui-react';

import './Login.css';
import { Link } from 'react-router-dom';
import { login } from '../../store/actionCreators/plannerCreators';

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [userFromState, isVerifyingFromStore] = useSelector(({ userData, isVerifyingAuth }) => [userData, isVerifyingAuth]);

  useEffect(() => {
    if (userFromState && !isVerifyingFromStore) {
      history.push('/');
    }
  });

  const checkForm = async (event) => {
    event.preventDefault();
    await login({
      username, password,
    }, history)(dispatch);
  };

  return (
    <>
      {!userFromState && isVerifyingFromStore && <div>Loading...</div>}
      {!userFromState && !isVerifyingFromStore
        && (
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
                  <Link to="/registration">
                    Registration
                  </Link>
                </Segment>
              </Form>
            </div>
          </div>
        )}
    </>
  );
};
