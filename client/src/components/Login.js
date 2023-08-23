import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"

import { UserContext } from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState("")
  const navigate = useNavigate()

  const {login} = useContext(UserContext)

  function handleSubmit(e){
    e.preventDefault()

    fetch(`/login`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({
        username:username,
        password:password
      })
    })

    .then(res => {
      if(res.ok){
        res.json()
        .then(user => {
          login(user)
          navigate("/");
        })
        } else {
          res.json().then(json => {
            setErrors(json.errors) 
          })
        }
      })  
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> <br/>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br/>
        <input type="submit"/>
      </form>
      {errors? <div style={{ color: "red" }}>{errors}</div>:null}
    </>
  )
}

export default Login;