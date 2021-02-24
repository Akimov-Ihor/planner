import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  Button, Form, Header, Segment,
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import { login } from '../../store/actions/planner.actions';
import { checkLogin } from '../../utils/validation-utils';

import './Login.css';

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [formsError, setFormsErrors] = useState({});
  const [userFromState, isVerifyingFromStore] = useSelector(
    ({ userData, isVerifyingAuth }) => [userData, isVerifyingAuth],
  );

  useEffect(() => {
    if (userFromState && !isVerifyingFromStore) {
      history.push('/');
    }
  });

  const checkForm = async () => {
    await checkLogin({ username, password }).catch((err) => {
      const arrObj = err.inner.reduce((acc, current) => {
        // eslint-disable-next-line no-param-reassign
        acc[current.path] = current.message;
        return acc;
      }, {});
      setFormsErrors(arrObj);
    });
    if (Object.keys(formsError).length === 0 && username !== '' && password !== '') {
      await login({
        username, password,
      }, history)(dispatch);
    }
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
                    name="user"
                    value={username}
                    error={formsError.username}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    error={formsError.password}
                  />
                  <Button type="submit" color="teal" fluid size="medium" onClick={checkForm}>
                    Login
                  </Button>
                  <div className="login-link-contatiner">
                    Not a member? &ensp;
                    <Link to="/registration">
                      Signup Now
                    </Link>
                  </div>
                </Segment>
              </Form>
            </div>
          </div>
        )}
    </>
  );
};
