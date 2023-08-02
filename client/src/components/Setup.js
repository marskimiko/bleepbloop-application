import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Setup({ setup }) {
  const {name, description, photo, genre, id} = setup;

  return (
    <div>
      <h2>Setupcard</h2>
      <h3>{setup.name}</h3>
      {/* <Card>
      <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Link  to={`/setups/${id}`}><Button variant="success">more info</Button></Link>
        </Card.Body>
      </Card> */}
    </div>
  )
}

export default Setup;