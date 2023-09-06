import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  FormControl
} from "@mui/material";


const SetupForm = ({ formFlag, setFormFlag }) => {
  const { user, setUser, allInstruments } = useContext(UserContext);
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState("");
  const [genre, setGenre] = useState("");
  const [instrumentIds, setInstrumentIds] = useState([]);
  const [errors, setErrors] = useState([]);
  

  function updateUserSetups(setup) {
    const updatedSetups = [...user.setups, setup]
    const updatedUser = {...user, setups: updatedSetups}
    setUser(updatedUser)
  }
   

  function handleSubmit(e) {
    e.preventDefault()

    fetch(`/setups`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: name,
        description: description,
        photo: photo,
        genre: genre,
        instrument_ids: instrumentIds
      })
    })

    .then(res => {
      if (res.ok) {
        res.json()
        .then(data => {
          updateUserSetups(data)
          setFormFlag(!formFlag)
        })
      } else {
        res.json().then(json => setErrors(json.errors))
      }
    })

  }


  return (
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Label htmlFor="title">Name:</Form.Label>
      <Form.Control
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Form.Label htmlFor="description">Description:</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Form.Label htmlFor="photo">Photo:</Form.Label>
      <Form.Control
        type="text"
        name="photo"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <Form.Label htmlFor="genre">Genre:</Form.Label>
      <Form.Control
        type="text"
        name="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <FormControl sx={{ m: 1, width: 500 }}>
        <InputLabel>Instruments</InputLabel>
        <Select
        multiple
        value={instrumentIds}
        onChange={(e) => setInstrumentIds(e.target.value)}
        input={<OutlinedInput label="instruments" />}
        >
        {allInstruments.map((instrument) => (
          <MenuItem key={instrument.id} value={instrument.id}>
            {instrument.name}
          </MenuItem>
        ))}
      </Select>
      </FormControl>
      <br/>
      <Button
        variant="success" 
        type="submit"
      >Add
      </Button>
    </Form>
    {errors? <ul style={{ color: "red" }}>{errors.map((error, i) => <li key={i}>{error}</li>)}</ul>:null}
    </Container>
  );


}

export default SetupForm;