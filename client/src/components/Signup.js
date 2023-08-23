import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState("")
  const [image, setImage] = useState(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([])
  console.log(errors)
  
  const navigate = useNavigate()
  const {signup} = useContext(UserContext);
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("name", name)
  //   formData.append("image", image)
  //   formData.append("username", username)
  //   formData.append("password", password)

  //   // fetch('/signup', {
  //   //   method: 'POST',
  //   //   headers: { 'Content-Type': 'application/json'},
  //   //   body: JSON.stringify({
  //   //     name: name,
  //   //     username: username,
  //   //     password: password,
  //   //     password_confirmation: passwordConfirmation
  //   //   })
  //   // })

  //   fetch('/signup', {
  //     method: 'POST',
  //     body: formData
  //   })
  //   .then(response => response.json())
  //   .then(user => {
  //     if(!user.errors) {
  //       signup(user)
  //       navigate('/')
  //     } else {
  //       setName("")
  //       setUsername("")
  //       setPassword("")
  //       // setPasswordConfirmation("")
        
  //       const errorLis = user.errors.map(error => <li>{error}</li>)
  //       setErrors(errorLis)
  //     }
  //   })
  // }

  function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData();
    formData.append("name", name)
    formData.append("image", image)
    formData.append("username", username)
    formData.append("password", password)


    fetch(`/users`,{
      method:'POST',
      body: formData
    })

    .then(res => {
      if(res.ok){
        res.json()
        .then(user => {
          signup(user)
          navigate("/");
        })
        } else {
          res.json().then(json => {
            setName("")
            setUsername("")
            setPassword("")
            setErrors(json.errors) 
          })
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
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Image: </label>
          <input 
            type="file"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        <label>Username: </label>
          <input 
            type="text"
            id="name"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        <label>Password: </label>
          <input 
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        {/* <label>Confirm Password: </label>
          <input 
            type="password"
            id="password-confirmation"
            name="password-confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
        /> */}
        <input type="submit"/>
      </form>
      {errors? <div style={{ color: "red" }}>{errors}</div>:null}
    </div>
  )
}

export default Signup;