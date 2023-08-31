import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        <Container>
          <Form onSubmit={handleSubmit} style={{ width: '15rem' }} className="mt-5">
            <Form.Group className="mb-3">
              <Form.Label column sm={2}>Name: </Form.Label>
              <Form.Control 
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label column sm={2}>Image: </Form.Label>
              <Form.Control 
                type="file"
                id="image"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label column sm={2}>Username: </Form.Label>
              <Form.Control 
                type="text"
                id="name"
                name="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password: </Form.Label>
              <Form.Control 
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <br/>
        <Button type="submit">Sign Up</Button>
      </Form>
        <ul>
          <li style={{ color: "red" }}>add image</li>
        </ul>
      </Container>

      ) : (

        <Container>
          <Form onSubmit={handleSubmit} style={{ width: '15rem' }} className="mt-5">

            <Form.Group className="mb-3">
              <Form.Label column sm={2}>Name: </Form.Label>
              <Form.Control 
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label column sm={2}>Image: </Form.Label>
              <Form.Control 
                type="file"
                id="image"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label column sm={2}>Username: </Form.Label>
              <Form.Control 
                type="text"
                id="name"
                name="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password: </Form.Label>
              <Form.Control 
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <br/>
            <Button type="submit">Sign Up</Button>

          </Form>
        </Container>
      )}
      {errors? <ul style={{ color: "red" }}>{errors.map((error, i) => <li key={i}>{error}</li>)}</ul>:null}
    </div>
  )

}

export default Signup;
