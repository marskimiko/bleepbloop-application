import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  FormControl
} from "@mui/material";


const SetupForm = () => {
  const { user, setUser, instruments, setInstruments } = useContext(UserContext);
  // const params = useParams();
  // console.log(user.setups)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState("");
  const [genre, setGenre] = useState("");
  const [selectedInstruments, setSelectedInstruments] = useState([]);


  function updateUserSetups(setup) {
    const updatedSetups = [...user.setups, setup]
    const updatedUser = {...user, setups: updatedSetups}
    setUser(updatedUser)
  }
  
  console.log(instruments)
  
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`/setups`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: name,
        description: description,
        photo: photo,
        genre: genre
      })
    })
    .then(res => res.json())
    .then(data => {
      // console.log('data', data)
      updateUserSetups(data)
    })

  }

  
  // return (
  //   <Container>
  //   <Form onSubmit={handleSubmit}>
  //     <Form.Label htmlFor="title">Name:</Form.Label>
  //     <Form.Control
  //       type="text"
  //       name="name"
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //     />
  //     <Form.Label htmlFor="description">Description:</Form.Label>
  //     <Form.Control
  //       as="textarea"
  //       rows={3}
  //       type="text"
  //       name="description"
  //       value={description}
  //       onChange={(e) => setDescription(e.target.value)}
  //     />
  //     <Form.Label htmlFor="photo">Photo:</Form.Label>
  //     <Form.Control
  //       type="text"
  //       name="photo"
  //       value={photo}
  //       onChange={(e) => setPhoto(e.target.value)}
  //     />
  //     <Form.Label htmlFor="genre">Genre:</Form.Label>
  //     <Form.Control
  //       type="text"
  //       name="genre"
  //       value={genre}
  //       onChange={(e) => setGenre(e.target.value)}
  //     />
  //     <Button variant="success" type="submit">
  //       Add
  //     </Button>
  //   </Form>
  //   </Container>
  // );


  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input 
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> <br />
      <label>Description: </label>
      <input 
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /> <br />
      <label>Photo: </label>
      <input 
        type="text"
        id="photo"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      /> <br />
      <label>Genre: </label>
      <input 
        type="text"
        id="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      /> <br />
      <FormControl sx={{ m: 1, width: 500 }}>
        <InputLabel>Instruments</InputLabel>
        <Select
        multiple
        value={selectedInstruments}
        onChange={(e) => setSelectedInstruments(e.target.value)}
        input={<OutlinedInput label="Multiple Select" />}
      >
        {instruments.map((instrument) => (
          <MenuItem key={instrument.id} value={instrument.id}>
            {instrument.name}
          </MenuItem>
        ))}
      </Select>
      </FormControl>
      <input type="submit"/>
    </form>
  )

}

export default SetupForm;
