import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';

import Setup from './Setup'
import SetupForm from "./SetupForm"

import Button from 'react-bootstrap/Button';


function Setups() {
  const { loggedIn, user } = useContext(UserContext);
  const [formFlag, setFormFlag] = useState(false);
  
  // console.log(user.setups)
  // console.log(instruments)

  if (loggedIn) {
    const setupsList = user.setups.map((setup) => {
      return (
        <div key={setup.id} className="container">
          <Setup  setup={setup}/>          
        </div>
      )
    })

    return (
      <div className="setupscontainer">
        {setupsList}
        <br />
        {formFlag ? 
          <SetupForm 
            formFlag={formFlag} 
            setFormFlag={setFormFlag}
          />
          :
          <Button
          size="sm" 
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