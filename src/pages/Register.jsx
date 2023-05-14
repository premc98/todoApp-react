import React, { useState } from 'react'
import {Link} from "react-router-dom";

const Register = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  const submitHandler = (e) => {
    e.preventDefault(); //prevents from refreshing 
    console.log(name,email,password)

  }
  return <div className='login'>
    <section>
      <form onSubmit={submitHandler}>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" 
          placeholder='Name' 
          required
        />
        <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
          placeholder='Email' 
          required
        />
        <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" 
          placeholder='Password' 
          required
        />
        <button type="submit">Sign Up</button>
        <h4>Or</h4>
        <Link to="/login">Log In</Link>
      </form>
    </section>
  </div>
}

export default Register