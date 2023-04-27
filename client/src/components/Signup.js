import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errorsList, setErrorsList] = useState([])
  
  const navigate = useNavigate()
  const {signup} = useContext(UserContext);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: name,
        username: username,
        password: password,
        password_confirmation: passwordConfirmation
      })
    })
    .then(response => response.json())
    .then()
    .then(user => {
      if(!user.errors) {
        signup(user)
        navigate('/')
      } else {
        setName("")
        setUsername("")
        setPassword("")
        setPasswordConfirmation("")
        
        const errorLis = user.errors.map(error => <li>{error}</li>)
        setErrorsList(errorLis)
      }
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
      <label>Name: </label>
        <input 
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Username: </label>
        <input 
          type="text"
          id="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password: </label>
        <input 
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password: </label>
        <input 
          type="password"
          id="password-confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <input type="submit"/>
      </form>
      <ul>
        {errorsList}
      </ul>
    </div>
  )
}

export default Signup;