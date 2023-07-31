import React, {useState, useContext} from 'react'
import { Route, useParams } from "react-router-dom";

// these are all components nancy used, not sure if I will use them too, just put them here as an option to consider
// import SetupForm from "./SetupForm"
// import SetupLinks from "./SetupLinks"
// import Setup from './Setup'

import { UserContext } from '../context/UserContext';

function Setups() {
  const {} = useContext(UserContext);
  const [formFlag, setFormFlat] = useState(false);
  const params = useParams();

  return (
    <div>Setups</div>
  )
}

export default Setups;