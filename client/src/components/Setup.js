import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';
import EditSetup from './EditSetup';
import SetupDetails from './SetupDetails';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




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
    <div className="wrapper">
      <Card className="card">
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
            <Card.Text>{genre}</Card.Text>
            <Link  
              to={`/setups/${id}`}
            >
              <Button variant="primary">more info</Button>
            </Link>
          </Card.Body>
          
        )}
        <Button variant="outline-secondary" onClick={() => setIsEdit((isEdit) => !isEdit)}>edit</Button>
        <Button variant="outline-secondary" onClick={handleDelete}>🗑</Button>
      </Card>
    </div>
  );
  
  
}

export default Setup;