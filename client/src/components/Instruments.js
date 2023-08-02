import React, {useState, useContext} from 'react'
import { Route, useParams } from "react-router-dom";

// these are all components nancy used, not sure if I will use them too, just put them here as an option to consider
// import InstrumentForm from "./SetupForm"
// import InstrumentLinks from "./SetupLinks"
// import Instrument from './Setup'

import { UserContext } from '../context/UserContext';

function Instruments() {
  const { instruments, loggedIn } = useContext(UserContext);
  const [formFlag, setFormFlag] = useState(false);
  const params = useParams();

  if (loggedIn) {
    const instrumentList = instruments.map(instrument => <li>{instrument.name}</li>)

    return (
      <div>
        <h3>instruments: </h3>
        {instrumentList}
      </div>
    )
  } else {
    return (
      <h3> Not Authorized - Please sign up or login</h3>
    )
  }

}

export default Instruments;