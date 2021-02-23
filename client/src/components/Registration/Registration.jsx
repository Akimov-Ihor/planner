import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Form, Grid, Header, Segment,
} from 'semantic-ui-react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { useFormFields } from '../../utils/useFormFields.jsx';
import { registration } from '../../store/actionCreators/plannerCreators';

export const Registration = () => {
  const [fields, handleFieldChange] = useFormFields({});
  const history = useHistory();
  const dispatch = useDispatch();

  const sendRegistrationForm = () => {
    const {
      username, email, name, gender, company, age, password,
    } = fields;

    registration({
      username, email, name, gender, company, age, password,
    }, history)(dispatch);
  };
  const checkFields = !(Object.keys(fields).length === 7 && Object.entries(fields).every((field) => field[1] !== ''));
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Registration your account
        </Header>
        <Form size="large" autoComplete="off">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              name="username"
              onChange={handleFieldChange}
            />
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="Email"
              type="email"
              autoComplete="off"
              name="email"
              onChange={handleFieldChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Name"
              type="text"
              autoComplete="off"
              name="name"
              onChange={handleFieldChange}
            />
            <Form.Input
              fluid
              icon="birthday cake"
              iconPosition="left"
              placeholder="Age"
              type="number"
              autoComplete="off"
              name="age"
              onChange={handleFieldChange}
            />
            <Form.Input
              fluid
              icon="heterosexual"
              iconPosition="left"
              placeholder="Gender"
              type="text"
              autoComplete="off"
              name="gender"
              onChange={handleFieldChange}
            />
            <Form.Input
              fluid
              icon="address card"
              iconPosition="left"
              placeholder="Company"
              type="text"
              autoComplete="off"
              name="company"
              onChange={handleFieldChange}
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              autoComplete="off"
              name="password"
              onChange={handleFieldChange}
            />
            <Button color="teal" fluid size="large" disabled={checkFields} onClick={sendRegistrationForm}>
              Registration
            </Button>
            <Link to="/login">
              Login
            </Link>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
