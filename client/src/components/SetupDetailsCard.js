import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

function SetupDetailsCard( setup ) {
  const { user } = useContext(UserContext);
  // const { id } = setup;

  console.log('currently nested object',setup.setup)
  // const setups = user.setups

  // debugger

  const setupDetails = user.setups.find((userSetup) => {
    return userSetup.id === setup.setup.id
   })

  // const setupDetails = user.setups.find((setup) => setup.id === id)

   function checkSetupDetails() {
    if (setupDetails) {
      return (
        <div>
          <h3>{setupDetails.name}</h3>
        </div>
      )
    } else {
      return null
    }
  }

  return (checkSetupDetails())

// return (
//   <div>
//     <h3>SetupDetailsCard</h3>
//   </div>
// )

}

export default SetupDetailsCard