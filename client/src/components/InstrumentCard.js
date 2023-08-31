import React from 'react'

function InstrumentCard({ instrumentObject } ) {
  const {id, name, brand, photo} = instrumentObject;

  return (
    <div class="setupcard">
      <img src={photo} alt="setup" style={{ width: '100%' }}/>
      <h1 key={id}>{name}</h1>
      <p class="description">{brand}</p>
    </div>
  )  
}

export default InstrumentCard