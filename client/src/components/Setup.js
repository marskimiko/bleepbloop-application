import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Setup({ setup }) {
  const { user, setUser } = useContext(UserContext);
  const {name, description, photo, genre, id} = setup;
  console.log('setup', setup)
  console.log('user',user)

  function deleteSetup() {
    const setups = user.setups
    const filteredSetups = setups.filter((setup) => setup.id !== id)
    const updatedUser = {...user, setups: filteredSetups}
    setUser(updatedUser)
  }
  
  const handleDelete = () => {
    fetch(`/setups/${id}`, {
      method: 'DELETE',
    });
    deleteSetup(id)
    // updateUser(id)
  };

  return (
    <div className='container'>
      <div className='item'>
        {/* <h2>{name}</h2>
        <h3>{description}</h3> */}
      <Card>
        <Card.Img src={photo}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{genre}</Card.Text>
        </Card.Body>
        <Button variant="outline-secondary" onClick={handleDelete}>🗑</Button>
      </Card>
      </div>      
    </div>
  )
}

export default Setup;