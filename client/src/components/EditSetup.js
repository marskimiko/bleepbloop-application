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
  FormControl,
  Checkbox,
  FormGroup,
  FormControlLabel,
  ListItemText
} from "@mui/material";

function EditSetup({setup, isEdit, setIsEdit}) {
  const { user, setUser, allInstruments } = useContext(UserContext);
  // const [instrumentIds, setInstrumentIds] = useState([]);
  const [editInstruments, setEditInstruments] = useState([])
  const {name, description, photo, genre, id, instruments} = setup;
  // console.log(setup)
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
    // setInstrumentIds({...formData, [formData.instrument_ids]: e.target.value})

    // console.log('formData',formData.instrument_ids)
    // console.log('formdata,instrument_ids',formData.instrument_ids)
    // console.log('e.target.value',e.target.value)
    // setEditInstruments({...setup.instruments, editInstruments: e.target.value})
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

    // add key value pair to form ( add key instrument ids with an array of instrument ids to formData)

    const getInstrumentIds = editInstruments.map((inst) => inst.id)

    const newFormData = {...formData, instrument_ids: getInstrumentIds}

  
    fetch(`/setups/${id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFormData)
    })
    .then(res => res.json())
    .then(data => {
      editSetupList(data)
      setIsEdit(!isEdit)
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

      {/* <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Instruments</InputLabel>
        <Select
          multiple
          value={formData.instrument_ids}
          onChange={(e) => console.log(e.target.value)}
          input={<OutlinedInput label="instruments" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {allInstruments.map((instrument) => (
            <MenuItem key={instrument.id} value={instrument.id}>
              <Checkbox  checked={}/>
              <ListItemText primary={instrument.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}

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
    </Container>
  );
}

export default EditSetup

// onClick={() => setIsEdit((isEdit) => !isEdit)} 