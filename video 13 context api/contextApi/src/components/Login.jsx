import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
  const [userName , setUserName] = useState('');
  const [password , setPassword] = useState('');

  // setting the value in context api
  const {setUser} = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({userName , password})
  }
  return (
    <div>
      Login
      <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='enter your Username here' />
      <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter your password here' />
      <button onClick={handleSubmit}>Submit</button>
      
    </div>
  )
}

export default Login