import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function SetupDetails() {
  const { user, loggedIn } = useContext(UserContext);
  const params = useParams()

  const userSetups = user.setups
  console.log(params.id)
  console.log(user.setups)

  const setupDetails = userSetups.find((userSetup) => {
    return parseInt(params.id) === userSetup.id
   })


return (
  <div className="container">
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={setupDetails.photo} alt="mapPhoto"/>
    <Card.Body>
      <Card.Title>{setupDetails.name}</Card.Title>
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