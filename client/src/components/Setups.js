import React, {useState, useContext} from 'react'
import { Route, useParams } from "react-router-dom";
import Setup from './Setup'
import SetupForm from "./SetupForm"

import { UserContext } from '../context/UserContext';

import Button from 'react-bootstrap/Button';

// import Instruments from './Instruments';
// these are all components nancy used, not sure if I will use them too, just put them here as an option to consider
// import SetupForm from "./SetupForm"
// import SetupLinks from "./SetupLinks"


function Setups() {
  const { loggedIn, user } = useContext(UserContext);
  const [formFlag, setFormFlag] = useState(false);
  // const params = useParams();
  

  if (loggedIn) {
    const userSetups = user.setups
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