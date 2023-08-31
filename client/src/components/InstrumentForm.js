import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const InstrumentForm = () => {
  const { allInstruments, setAllInstruments } = useContext(UserContext);
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [photo, setPhoto] = useState("");
  const [errors, setErrors] = useState([]);

  // function updateInstruments(instrument) {
  //   const updatedSetups = [...allInstruments, instrument]
  //   // const updatedUser = {...user, setups: updatedSetups}
  //   setUser(updatedUser)
  // }

  // const addInstrument = (instrument) => {

  //   debugger
  //   // console.log(instrument)
  //   // const updatedInstruments = [...allInstruments, instrument]
  //   // setAllInstruments(updatedInstruments)
  //   // setAllInstruments( current => [...current, instrument])
  // }

  function addInstrument(instrument) {
    console.log(instrument)
    const updatedInstruments = [...allInstruments, instrument]
    setAllInstruments(updatedInstruments)
  }
   

  function handleSubmit(e) {
    e.preventDefault()

    fetch(`/instruments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: name,
        brand: brand,
        photo: photo
      })
    })

    .then(res => {
      if (res.ok) {
        res.json()
        .then(instrument => {
          addInstrument(instrument)
          // updateInstruments(data)
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
      <Form.Label htmlFor="brnad">Brand:</Form.Label>
      <Form.Control
        type="text"
        name="brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <Form.Label htmlFor="photo">Photo:</Form.Label>
      <Form.Control
        type="text"
        name="photo"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <br/>
      <Button variant="success" type="submit">
        Add
      </Button>
    </Form>
    {errors? <ul style={{ color: "red" }}>{errors.map((error, i) => <li key={i}>{error}</li>)}</ul>:null}
    </Container>
  );


}

export default InstrumentForm;