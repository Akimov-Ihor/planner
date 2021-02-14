import React from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, Header, Image, Message, Segment } from 'semantic-ui-react'
import './Login.css';

const Login = ({ isAuth, setIsAuth }) => {
   if (isAuth) {
      return <Redirect to='/main' />
   }
   return (
      <div className='login-wrapper'>
         <div className='login-container'>
            <Header as='h2' color='teal' textAlign='center'>
               Log-in to your account
      </Header>
            <Form size='large'>
               <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                  <Form.Input
                     fluid
                     icon='lock'
                     iconPosition='left'
                     placeholder='Password'
                     type='password'
                  />

                  <Button color='teal' fluid size='large' onClick={() => setIsAuth(!isAuth)}>
                     Login
          </Button>
               </Segment>
            </Form>
         </div>

      </div>
   )

}

export default Login