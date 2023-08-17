import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function SetupDetails() {
  const { user, instruments } = useContext(UserContext);
  const params = useParams()
  const userSetups = user.setups

  const setupDetails = userSetups.find((userSetup) => {
    return parseInt(params.id) === userSetup.id
   })

   console.log(instruments)

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
    </ListGroup>
  </Card>
  </div>
)



}

export default SetupDetails

// const setupDetails = setups.find(setup => setup.id === user.id )