import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';
import EditSetup from './EditSetup';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Setup({ setup }) {
  const { user, setUser } = useContext(UserContext);
  const {name, description, photo, genre, id} = setup;

  const [isEdit, setIsEdit] = useState(false);
  // const [setupUpdates, setSetupUpdates] = useState({
  //   name: name,
  //   description: description,
  //   photo: photo,
  //   genre: genre
  // })


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

  // function editSetup(e) {
  //   setSetupUpdates({ ...setSetupUpdates, [e.target.name]: e.target.value });
  // }

  // function handleEditSetup(e) {
  //   e.preventDefault();

  //   fetch(`/setups/${id}`, {
  //     method: "PATCH",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(setupUpdates)
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     editSetup(data)
  //   })
  // }

  // function editSetup(updated) {
  //   const setups = user.setups
  //   const setupsMap = setups.map((setup) => {
  //     if (setup.id === id) {
          
  //     } else {
  //       return setup 
  //     }
  //   })

  // }

  // function onUpdateReview (updatedReview) {

  //   const updatedRoutes = routes.map((route) => {
  //     if (parseInt(params.id) === route.id) {
  //       const reviews = route.reviews;
        
  //       const reviewsMap = reviews.map((review) => {
  //         if (review.id === updatedReview.id) {
  //           return updatedReview
  //         } else {
  //           return review;
  //         }
  //       })       
  //       route.reviews = reviewsMap
  //       return route
  //     } else {
  //       return route;
  //     }
  //   })
  //   setRoutes(updatedRoutes);
  // }

  // const handleUpdateReview = (updatedReview) => {
  //   // onUpdateReview(updatedReview);
  // }

  // return (
  //   <div className='container'>
  //     <div className='item'>
  //       {/* <h2>{name}</h2>
  //       <h3>{description}</h3> */}
  //     <Card>
  //       <Card.Header>{name}</Card.Header>
  //       <Card.Img src={photo}/>
  //       <Card.Body>
  //         <Card.Text>{description}</Card.Text>
  //         <Card.Text>{genre}</Card.Text>
  //       </Card.Body>
  //       <Button variant="outline-secondary" onClick={handleDelete}>🗑</Button>
  //       <Button variant="outline-secondary" onClick={handleEditSetup}>edit</Button>
  //     </Card>
  //     </div>      
  //   </div>
  // )

  return (
    <div className="setupcontainer">
      <div class="setupitem">
      <Card className="text-center">
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
          </Card.Body>
          
        )}
        <Button variant="outline-secondary" onClick={() => setIsEdit((isEdit) => !isEdit)}>edit</Button>
        <Button variant="outline-secondary" onClick={handleDelete}>🗑</Button>
      </Card>
      </div>
    </div>
  );
  
  
}

export default Setup;