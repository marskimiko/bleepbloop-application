import React, {useState, useContext} from 'react'
import { useParams } from "react-router-dom";
// these are all components nancy used, not sure if I will use them too, just put them here as an option to consider
// import InstrumentForm from "./SetupForm"
// import InstrumentLinks from "./SetupLinks"
// import Instrument from './Setup'

import { UserContext } from '../context/UserContext';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Instruments({ instrument }) {
  const { instruments, loggedIn } = useContext(UserContext);
  const [formFlag, setFormFlag] = useState(false);
  const params = useParams();

  console.log(instrument)



  // return (
  //   <div>
  //     {instruments.map((instrument) => 
  //       <SetupForm
  //         key={instrument.id}
  //         instrument={instrument}
  //       />
  //     )}
  //   </div>
  // )

  return (
    <div className="container">
      <Card style={{ width: '15rem' }}>
        <Card.Title>Name: {instrument.name}</Card.Title>
        {/* <Card.Img>{instrument.photo}</Card.Img> */}
        {/* <Card.Body>
          <Card.Text>Brand: {instrument.brand}</Card.Text>
          <Card.Text>Category: {instrument.category}</Card.Text>
        </Card.Body> */}
        <ListGroup.Item>Brand: {instrument.brand}</ListGroup.Item>
        <ListGroup.Item>Brand: {instrument.category}</ListGroup.Item>
      </Card>
    </div>
  )

  // if (loggedIn) {
  //   const instrumentList = instruments.map(instrument => <li>{instrument.name}</li>)

  //   return (
  //     <div>
  //       <h3>instruments: </h3>
  //       {instrumentList}
  //     </div>
  //   )
  // } else {
  //   return (
  //     <h3> Not Authorized - Please sign up or login</h3>
  //   )
  // }

}

export default Instruments;