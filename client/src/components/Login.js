import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { UserContext } from '../context/UserContext';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState("")
  const navigate = useNavigate()

  const {login} = useContext(UserContext)

  function handleSubmit(e) {
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
    <Container>
      <Form onSubmit={handleSubmit} style={{ width: '15rem' }} className="mt-5">

        <Form.Group className="mb-3">
          <Form.Label column sm={2}>Username</Form.Label>
            <Form.Control
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label column sm={2}>Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> 
        </Form.Group>

        <Form.Group as={Row} className="mt-3">
          <Col >
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>

      </Form>

      {errors? <div style={{ color: "red" }}>{errors}</div>:null}

    </Container>
  )
}

export default Login;

// className='square border rounded border-5'