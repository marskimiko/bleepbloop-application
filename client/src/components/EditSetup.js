import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditSetup({setup, isEdit, setIsEdit}) {
  const { user, setUser } = useContext(UserContext);
  const {name, description, photo, genre, id} = setup;

  const [formData, setFormData] = useState({
    name: name,
    description: description,
    photo: photo,
    genre: genre
  });

  // const [name, setName] = useState("")
  // const [description, setDescription] = useState("")
  // const [photo, setPhoto] = useState("");
  // const [genre, setGenre] = useState("");


  // function editSetup(e) {
  //   setSetupUpdates({ ...setSetupUpdates, [e.target.name]: e.target.value });
  // }

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleEditSetup(e) {
    e.preventDefault();

    fetch(`/setups/${id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      handleChange(data)
    })
  }

  



  return (
    <Container>
    <Form onSubmit={handleEditSetup}>
      <Form.Label>Name:</Form.Label>
      <Form.Control
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Form.Label>Description:</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <Form.Label>Photo:</Form.Label>
      <Form.Control
        type="text"
        name="photo"
        value={formData.photo}
        onChange={handleChange}
      />
      <Form.Label>Genre:</Form.Label>
      <Form.Control
        type="text"
        name="genre"
        value={formData.genre}
        onChange={handleChange}
      />
      <Button variant="success" type="submit">
        Save
      </Button>
    </Form>
    </Container>
  );
}

export default EditSetup