import React from 'react'

const Login = () => {
   return (
      <div>
         <form>
            <label htmlFor='login'>Login</label>
            <input id='login'></input>

            <label htmlFor='password'>Password</label>
            <input id='password' type='password'></input>
            
            <button>Login</button>

         </form>
      </div>

   )
}

export default Login