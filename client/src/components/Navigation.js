import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext  } from "../context/UserContext";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  const {user, logout, loggedIn} = useContext(UserContext)
  const navigate = useNavigate()

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(() => {
      logout()
      navigate('/')
    })
  }

  if (loggedIn) {
    return (
      <>
        {/* <h1>Hello, {user.username}</h1> */}
        <Navbar>
          <Container>
            <Navbar.Brand>BLEEPBLOOP</Navbar.Brand>
            <Nav>
              <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/setups'>Setups</Nav.Link>
              <Nav.Link href='/instruments'>Instruments</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    )
  } else {
    return (
      <>
      <Navbar>
        <Container>
          <Nav>
            <Nav.Link href='/login'>login</Nav.Link>
           <Nav.Link href='/signup'>signup</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
      </>
    )
  }

  // if (loggedIn) {
  //   return (
  //     <>
  //       <h1>Hello, {user.username}</h1>
  //       <br/>
  //       <button onClick={logoutUser}>Logout</button>
  //       <NavLink to='/'>
  //          <button>home</button>
  //       </NavLink>
  //       <NavLink to='/setups'>
  //          <button>Setups</button>
  //       </NavLink>
  //       <hr/>
  //     </>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <NavLink to='/login'>
  //          <button>Login</button>
  //       </NavLink>
  //       <NavLink to='/signup'>
  //          <button>Signup</button>
  //       </NavLink>
  //     </div>
  //   )
  // }
  
}

export default Navigation