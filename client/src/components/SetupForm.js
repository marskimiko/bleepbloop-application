import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
// import { useParams } from 'react-router-dom'

const SetupForm = () => {
  const { user, setUser } = useContext(UserContext);
  // const params = useParams();
  console.log(user)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState("");
  const [genre, setGenre] = useState("");
  const [errors, setErrors] = useState([]);
  // const { addSetup } = useContext(UserContext);

  const addSetup = (setup) => {
    fetch(`/users/${user.id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(setup)
    })
    .then(res => res.json())
    .then(data => {
      console.log('data', data)
      // setSetups([...setups, data])
    })
  }

  
  const handleSubmit = (e) => {
    e.preventDefault()
    addSetup({
      name: name,
      description: description,
      photo: photo,
      genre: genre
    })
  }

  // const addNewSetup = (setup) => {
    
  //   const checkUser = user.map((user) => {
  //     if (parseInt(params.id) === user.id) {
  //       const newSetup = [...user.setups, setup]
  //       user.setups = newSetup
  //       return user;
  //     } else {
  //       return user
  //     }
  //   })
  //   setUser(checkUser)
  // }

  // function handleSubmit(e) {
  //   e.preventDefault()

  //   const setup = {
  //     name,
  //     description,
  //     photo, 
  //     genre
  //   }

  //   fetch(`/users/${params.id}`, {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(setup)
  //   })

  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(setup => {
  //         addNewSetup(setup)
  //       })
  //     } else {
  //       res.json().then(json => setErrors(json.errors))
  //     }
  //   })
  // }

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
      <input type="submit"/>
    </form>
  )

}

export default SetupForm;
