import React, {useState, useContext} from 'react'
import { Route, useParams } from "react-router-dom";
import SetupForm from "./SetupForm"


// import Instruments from './Instruments';

// these are all components nancy used, not sure if I will use them too, just put them here as an option to consider
// import SetupForm from "./SetupForm"
// import SetupLinks from "./SetupLinks"
// import Setup from './Setup'

import { UserContext } from '../context/UserContext';

function Setups() {
  const { setups, loggedIn } = useContext(UserContext);
  const [formFlag, setFormFlag] = useState(false);
  const params = useParams();

  if (loggedIn) {
    const setupsList = setups.map(setup =>
    <div>
      <h3>Name: {setup.name}</h3>
      <h4>Description: {setup.description}</h4>
      <a href={`/setups/${setup.id}`}><img src={setup.photo} alt="setup"/></a>
      <h5>Genre: {setup.genre}</h5>
    </div> 
    )

    return (
      <div>
        
        <h3>Setups </h3>
        {setupsList}
        <br />
        {formFlag ? 
          <SetupForm />
          :
          <button onClick={() => setFormFlag(true)}>Create Setup</button>
        }
        <br />
        {/* <div>{<Instruments />}</div> */}
      </div>
    )
  } else {
    return (
      <h3> Not Authorized - Please sign up or login</h3>
    )
  }
  
}

export default Setups;