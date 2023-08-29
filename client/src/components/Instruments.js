import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Instruments({ instrument }) {

  return (
    <div className="container">
      <Card style={{ width: '15rem' }}>
        <Card.Title>Name: {instrument.name}</Card.Title>
        <Card.Img src={instrument.photo} alt="instruments"/>
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