import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';

import InstrumentCard from './InstrumentCard';
import InstrumentForm from './InstrumentForm'

import Button from 'react-bootstrap/Button';

function InstrumentContainer() {
  const { allInstruments } = useContext(UserContext);
  const [formFlag, setFormFlag] = useState(false);
  // console.log('instruments',allInstruments)

  const instrumentList = allInstruments.map((instrument) => {
    return (
      <div className="container">
        <InstrumentCard key={instrument.id} instrumentObject={instrument}/>
      </div>
    )
  })

  return (
    <div className="setupscontainer">
      {/* <h3 classname="setupstitle">Instruments</h3> */}
      {instrumentList}
      <br />
      {formFlag ? 
        <InstrumentForm />
        :
        <Button
        size="sm" 
        onClick={() => setFormFlag(true)}
        className='createsetupbutton'
        >Create Instrument</Button>
      }
      <br />
    </div>
  )

}

export default InstrumentContainer