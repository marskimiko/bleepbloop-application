import React, {useState, useContext} from 'react'
import { Route, useParams } from "react-router-dom";

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
    const setupsList = setups.map(s => <li>{s.name}</li>)
    return (
      <div>
        <h3>Setups: </h3>
        <br />
        {setupsList}
      </div>
    )
  } else {
    return (
      <h3> Not Authorized - Please sign up or login</h3>
    )
  }
  
}

export default Setups;