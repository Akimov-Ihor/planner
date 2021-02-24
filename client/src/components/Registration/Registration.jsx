import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Form, Grid, Header, Segment,
} from 'semantic-ui-react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { useFormFields } from '../../hooks/useFormFields.jsx';
import { REGISTRATION_FORM_FIELDS } from './constants/registration.constants';
import { registration } from '../../store/actions/planner.actions';

import { checkRegistration } from '../../utils/validation-utils';
import { constants } from '../../constants/text.constants';

export const Registration = () => {
  const [fields, handleFieldChange] = useFormFields({});
  const [formsErrors, setFormsErrors] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

  const [userFromState, isVerifyingFromStore] = useSelector(({ userData, isVerifyingAuth }) => [userData, isVerifyingAuth]);

  useEffect(() => {
    if (userFromState && !isVerifyingFromStore) {
      history.push('/');
    }
  });

  const sendRegistrationForm = async () => {
    await checkRegistration({ fields })
      .catch((err) => {
        const arrObj = err.inner.reduce((acc, current) => {
          acc[current.path] = current.message;
          return acc;
        }, {});
        setFormsErrors(arrObj);
      });

    const {
      username, email, name, gender, company, age, password,
    } = fields;

    if (!Object.keys(formsErrors).length && Object.keys(fields).length === REGISTRATION_FORM_FIELDS.length) {
      await registration({
        username, email, name, gender, company, age, password,
      }, history)(dispatch);
    }
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          {constants.registration.registrationTitle}
        </Header>
        <Form size="large" autoComplete="off">
          <Segment stacked>
            {
              REGISTRATION_FORM_FIELDS.map((field, idx) => {
                return (
                  <Form.Input
                    fluid
                    key={idx}
                    icon={field.icon}
                    iconPosition="left"
                    type={field.type || 'text'}
                    placeholder={field.placeholder}
                    name={field.name}
                    onChange={handleFieldChange}
                    error={Object.keys(formsErrors).length > 0 && formsErrors[field.name]}
                  />
                );
              })
            }
            <Button
              color="teal"
              fluid
              size="large"
              onClick={sendRegistrationForm}
            >
              {constants.registration.registration}

            </Button>
            <div>
              {constants.registration.alreadySignUp}
              <Link to="/login">
                {constants.registration.login}
              </Link>
            </div>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
