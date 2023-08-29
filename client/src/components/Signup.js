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
  const [isImage, setIsImage] = useState(false)  
  const navigate = useNavigate()
  const {signup} = useContext(UserContext);
  
  function handleSubmit(e){
    e.preventDefault()

    if (!image) {
      setIsImage(true)
    } else {
      const formData = new FormData();
      formData.append("name", name)
      formData.append("image", image)
      formData.append("username", username)
      formData.append("password", password)

      fetch(`/signup`,{
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
            res.json()
            .then(json => {
              setName("")
              setUsername("")
              setPassword("")
              setErrors(json.errors)
            })
          }
      })
    }    
  }
  

  return(
    <div>
      {isImage ? (
        <div>
          <form onSubmit={handleSubmit}>
          <label>Name: </label>
            <input 
              type="text"
              id="name"
              name="name"
              placeholder="Name"
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
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          <label>Password: </label>
            <input 
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        <input type="submit"/>
      </form>
          <li style={{ color: "red" }}>add image</li>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
        <label>Name: </label>
          <input 
            type="text"
            id="name"
            name="name"
            placeholder="Name"
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
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        <label>Password: </label>
          <input 
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <input type="submit"/>
      </form>
      )}
      {errors? <ul style={{ color: "red" }}>{errors.map((error, i) => <li key={i}>{error}</li>)}</ul>:null}
    </div>
  )
  


}

export default Signup;

        /* <label>Confirm Password: </label>
          <input 
            type="password"
            id="password-confirmation"
            name="password-confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
        /> */



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




    // return(
  //   <div>
      // <form onSubmit={handleSubmit}>
      //   <label>Name: </label>
      //     <input 
      //       type="text"
      //       id="name"
      //       name="name"
      //       value={name}
      //       onChange={(e) => setName(e.target.value)}
      //     />
      //     <label>Image: </label>
      //     <input 
      //       type="file"
      //       id="image"
      //       name="image"
      //       onChange={(e) => setImage(e.target.files[0])}
      //     />
      //   <label>Username: </label>
      //     <input 
      //       type="text"
      //       id="name"
      //       name="username"
      //       value={username}
      //       onChange={(e) => setUsername(e.target.value)}
      //     />
      //   <label>Password: </label>
      //     <input 
      //       type="password"
      //       id="password"
      //       name="password"
      //       value={password}
      //       onChange={(e) => setPassword(e.target.value)}
      //     />
      //   {/* <label>Confirm Password: </label>
      //     <input 
      //       type="password"
      //       id="password-confirmation"
      //       name="password-confirmation"
      //       value={passwordConfirmation}
      //       onChange={(e) => setPasswordConfirmation(e.target.value)}
      //   /> */}
      //   <input type="submit"/>
      // </form>
      // {errors? <ul style={{ color: "red" }}>{errors.map((error, i) => <li key={i}>{error}</li>)}</ul>:null}
  //   </div>
  // )



    // function handleSubmit(e){
  //   e.preventDefault()
  //   const formData = new FormData();
  //   formData.append("name", name)
  //   formData.append("image", image)
  //   formData.append("username", username)
  //   formData.append("password", password)
    

  //   fetch(`/signup`,{
  //     method:'POST',
  //     body: formData
  //   })

  //   .then(res => {
  //     if(res.ok){
  //       res.json()
  //       .then(user => {
  //         signup(user)
  //         navigate("/");
  //       })
  //       } else {
  //         res.json()
  //         .then(json => {
  //           setName("")
  //           setUsername("")
  //           setPassword("")
  //           setErrors(json.errors)
  //           // setErrors(Object.entries(json.errors)) 
  //         })
  //       }
  //     })  
  // }