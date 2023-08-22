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

  // const details = (userSetups || []).find((userSetup) => {
  //   return parseInt(params.id) === userSetup.id
  //  })
  //  trying out optional chaining, seems to work for .find but not on .map

  const details = userSetups.find((userSetup) => parseInt(params.id) === userSetup.id) 

  // const instruments = details.instruments

  const renderInstruments = details.instruments.map((instrument) => {
    return (
      <div>
        <Instruments key={instrument.id} instrument={instrument} />
      </div>
    )
  })

  function checkDetails() {
    if (renderInstruments) {
      return (
        <div className="container">
        <Card style={{ width: '18rem' }}>
        <Card.Title>{details.name}</Card.Title>
          <Card.Img variant="top" src={details.photo} alt="mapPhoto"/>
          <Card.Body>
            <Card.Text>{details.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Genre: {details.genre}</ListGroup.Item>
            {/* <ListGroup.Item>Instruments: {setupDetails.instruments.map(instrument => <li>{instrument.name}</li>)}</ListGroup.Item> */}
          </ListGroup>
        </Card>
          {renderInstruments}
        </div>
      )
    } else {
      return null
    }
  }

  return(checkDetails())
  


// return (
//   <div className="container">
//   <Card style={{ width: '18rem' }}>
//   <Card.Title>{details.name}</Card.Title>
//     <Card.Img variant="top" src={details.photo} alt="mapPhoto"/>
//     <Card.Body>
//       <Card.Text>{details.description}</Card.Text>
//     </Card.Body>
//     <ListGroup className="list-group-flush">
//       <ListGroup.Item>Genre: {details.genre}</ListGroup.Item>
//       {/* <ListGroup.Item>Instruments: {setupDetails.instruments.map(instrument => <li>{instrument.name}</li>)}</ListGroup.Item> */}
//     </ListGroup>
//   </Card>
//     {renderInstruments}
//   </div>
// )


}

export default SetupDetails

