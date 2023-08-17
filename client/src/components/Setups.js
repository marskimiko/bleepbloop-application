import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';

import Setup from './Setup'
import SetupForm from "./SetupForm"

import Button from 'react-bootstrap/Button';


function Setups() {
  const { loggedIn, user } = useContext(UserContext);
  const [formFlag, setFormFlag] = useState(false);
  

  if (loggedIn) {
    const userSetups = user.setups
    console.dir(userSetups, {depth: null});
    const setupsList = userSetups.map((setup) => {
      return (
        <div className="container">
          <Setup key={setup.id} setup={setup}/>          
        </div>
      )
    })

    return (
      <div>
        <h3>Setups </h3>
        {setupsList}
        <br />
        {formFlag ? 
          <SetupForm />
          :
          <Button 
          onClick={() => setFormFlag(true)}
          className='createsetupbutton'
          >Create Setup</Button>
        }
        <br />
      </div>
    )
  } else {
    return (
      <h3> Not Authorized - Please sign up or login</h3>
    )
  }
  
}

export default Setups;