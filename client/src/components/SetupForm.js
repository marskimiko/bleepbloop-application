import React, { useState } from 'react';
import { UserContext } from '../context/UserContext';

const SetupForm = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState("");
  const [genre, setGenre] = useState("");
  const { addSetup } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    addSetup({
      name: name,
      description: description,
      photo: photo,
      genre: genre
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
