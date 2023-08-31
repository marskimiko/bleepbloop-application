import React from 'react'

function InstrumentCard({ instrumentObject } ) {
  const {id, name, brand, photo} = instrumentObject;

  return (
    <div className="setupcard">
      <img 
        src={ photo || 'https://m.media-amazon.com/images/I/51Ib3jYSStL._AC_UF894,1000_QL80_.jpg' }
        alt="setup" 
        style={{ width: '100%' }}
      />
      <h1 key={id}>{name}</h1>
      <p className="description">{brand}</p>
    </div>
  )  
}

export default InstrumentCard