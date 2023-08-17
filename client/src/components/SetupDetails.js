import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { useParams } from 'react-router-dom';

import Instruments from './Instruments';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import Instruments from './Instruments';


function SetupDetails() {
  const { user } = useContext(UserContext);
  const params = useParams()
  const userSetups = user.setups

  const setupDetails = userSetups.find((userSetup) => {
    return parseInt(params.id) === userSetup.id
   })

  const renderInstruments = setupDetails.instruments.map((instrument) => {
    return (
      <div>
        <Instruments key={instrument.id} instrument={instrument} />
      </div>
    )
  })

  // console.log('setupDetails',setupDetails.instruments)

return (
  <div className="container">
  <Card style={{ width: '18rem' }}>
  <Card.Title>{setupDetails.name}</Card.Title>
    <Card.Img variant="top" src={setupDetails.photo} alt="mapPhoto"/>
    <Card.Body>
      <Card.Text>{setupDetails.description}</Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Genre: {setupDetails.genre}</ListGroup.Item>
      {/* <ListGroup.Item>Instruments: {setupDetails.instruments.map(instrument => <li>{instrument.name}</li>)}</ListGroup.Item> */}
    </ListGroup>
  </Card>
    {renderInstruments}
  </div>
)


}

export default SetupDetails

