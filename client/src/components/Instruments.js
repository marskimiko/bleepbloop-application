import React, {useState, useContext} from 'react'
import { Route, useParams } from "react-router-dom";

// these are all components nancy used, not sure if I will use them too, just put them here as an option to consider
// import InstrumentForm from "./SetupForm"
// import InstrumentLinks from "./SetupLinks"
// import Instrument from './Setup'

import { UserContext } from '../context/UserContext';

function Instruments() {
  const {} = useContext(UserContext);
  const [formFlag, setFormFlat] = useState(false);
  const params = useParams();

  return (
    <div>instruments</div>
  )
}

export default Instruments;