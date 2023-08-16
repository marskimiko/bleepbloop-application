import React, { useContext } from 'react'
import SetupDetailsCard from './SetupDetailsCard';

import { UserContext } from '../context/UserContext';

function SetupDetails() {
  const { user, loggedIn } = useContext(UserContext);

  console.log(user.setups)

  // const renderSetups = user.setups.map((setup) => {
    
  //   return <SetupDetailsCard />
  // })

  // return (
  //   <>{renderSetups}</>
  // )


  if (loggedIn) {
    const renderSetups = user.setups.map((setup) => {
      // debugger
      console.log('renderSetup',setup)
      return (
        <div>
          <SetupDetailsCard setup={setup}/>
        </div>
      )
    })
    return (
      <div>{renderSetups}</div>
    )
  } else {
    return (
      <h3> Not Authorized - Please sign up or login</h3>
    ) 
  }


}

export default SetupDetails

// const setupDetails = setups.find(setup => setup.id === user.id )