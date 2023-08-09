import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Setup({ setup }) {
  const {name, description, photo, genre, id} = setup;

  return (
    <div className='container'>
      <div className='item'>
        {/* <h2>{name}</h2>
        <h3>{description}</h3> */}
      <Card>
        <Card.Img src={photo}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
      </div>      
    </div>
  )
}

export default Setup;