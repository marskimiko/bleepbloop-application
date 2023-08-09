import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
// import { useParams } from 'react-router-dom'

const SetupForm = () => {
  const { user, setUser } = useContext(UserContext);
  // const params = useParams();
  // console.log(user.setups)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState("");
  const [genre, setGenre] = useState("");

  function updateUserSetups(setup) {
    const updatedSetups = [...user.setups, setup]
    const updatedUser = {...user, setups: updatedSetups}
    setUser(updatedUser)
  }

  
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
