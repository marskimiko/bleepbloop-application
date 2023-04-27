import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Home() {
  const { user } = useContext(UserContext)

  if (!user || user.error) {
    return (
      <h3>Please Login or Signup</h3>
    )
  } else {
    return (
      <div>
        <h3>{user.name} Home</h3>
      </div>
    )
  }

}

export default Home;