import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom"

import { UserContext  } from "../context/UserContext";


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
        <h1>Hello, {user.username}</h1>
        <br/>
        <button onClick={logoutUser}>Logout</button>
        <NavLink to='/setups'>
           <button>Setups</button>
        </NavLink>
        <hr/>
      </>
    )
  } else {
    return (
      <div>
        <NavLink to='/login'>
           <button>Login</button>
        </NavLink>
        <NavLink to='/signup'>
           <button>Signup</button>
        </NavLink>
      </div>
    )
  }
  
}

export default Navigation