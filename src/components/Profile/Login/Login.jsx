import React from 'react'

// const Login = () => {
//    return (
//       <div>
//          <form>
//             <label htmlFor='login'>Login</label>
//             <input id='login'></input>

//             <label htmlFor='password'>Password</label>
//             <input id='password' type='password'></input>

//             <button>Login</button>

//          </form>
//       </div>

//    )
// }
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Login = () => {
   const test =()=> {
      
   }
   return (
      <>
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

               <Button color='teal' fluid size='large' onClick={()=>test()}>
                  Login
          </Button>
            </Segment>
         </Form>
      </>
   )

}

export default Login