import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';

import EditSetup from './EditSetup';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
          

function Setup({ setup }) {
  const { user, setUser } = useContext(UserContext);
  const {name, description, photo, genre, id} = setup;
  const [isEdit, setIsEdit] = useState(false);

  

  function deleteSetup() {
    const setups = user.setups
    const filteredSetups = setups.filter((filteredSetup) => filteredSetup.id !== id)
    const updatedUser = {...user, setups: filteredSetups}
    setUser(updatedUser)
  }

  
  const handleDelete = () => {
    fetch(`/setups/${id}`, {
      method: 'DELETE',
    });
    deleteSetup(id)
  };
  


  return (
    <div className="container">
      <Card style={{ width: '18rem' }}>
        <Card.Header as="h5">{name}</Card.Header>
        <Card.Img src={photo}/>
        {isEdit ?(
          <EditSetup
          setup={setup}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          />
        ) : (
          <Card.Body>
            <Card.Text>{description}</Card.Text>
          </Card.Body>          
        )}
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Genre: {genre}</ListGroup.Item>
        </ListGroup>
        
        <Button variant="outline-secondary" onClick={() => setIsEdit((isEdit) => !isEdit)}>edit</Button>
        <Button variant="outline-secondary" onClick={handleDelete}>🗑</Button>
        <Link to={`/setups/${id}`}>
          <Button variant="outline-secondary">more info</Button>
        </Link>
      </Card>
    </div>
  );
  
  
}

export default Setup;