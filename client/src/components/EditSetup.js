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

function EditSetup({setup, isEdit, setIsEdit}) {
  const { user, setUser, allInstruments } = useContext(UserContext);
  const [editInstruments, setEditInstruments] = useState([])
  const {name, description, photo, genre, id } = setup;
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    name: name,
    description: description,
    photo: photo,
    genre: genre
  });

  console.log(editInstruments)


  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
    
  }
  
  function handleInstrumentChange(e) {
    setEditInstruments(e.target.value)
  }

  function editSetupList(updatedSetup) {
    const editedSetupList = user.setups.map((setup) => {
      if (setup.id === updatedSetup.id) {
       return updatedSetup
      } else {
        return setup
      }
    })
    const updatedUser = {...user, setups: editedSetupList}
    setUser(updatedUser)
  }

  function handleEditSetup(e) {
    e.preventDefault();

    const getInstrumentIds = editInstruments.map((inst) => inst.id)
    const newFormData = {...formData, instrument_ids: getInstrumentIds}

    fetch(`/setups/${id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFormData)
    })

    .then(res => {
      if (res.ok) {
        res.json()
        .then(data => {
          editSetupList(data)
          setIsEdit(!isEdit)
        })
      } else {
        res.json().then(json => setErrors(json.errors))
      }
    })
  }

  
  return (
    <Container>
    <Form name="editSetupForm" onSubmit={handleEditSetup}>
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
      <FormControl sx={{ m: 1, width: 500 }}>
        <InputLabel>Instruments</InputLabel>
        <Select
          multiple
          // value={formData.instrument_ids}
          value={editInstruments}
          onChange={handleInstrumentChange}
          input={<OutlinedInput label="instruments" />}
        >
          {allInstruments.map((instrument) => (
          <MenuItem key={instrument.id} value={instrument}>
            {instrument.name}
          </MenuItem>
        ))}
        </Select>
      </FormControl>
      <br/>
      <Button 
        variant="success" 
        type="submit"
      >
        Save
      </Button>
    </Form>
    {errors? <ul style={{ color: "red" }}>{errors.map((error, i) => <li key={i}>{error}</li>)}</ul>:null}
    </Container>
  );
}

export default EditSetup

// onClick={() => setIsEdit((isEdit) => !isEdit)} 