import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Home() {
  const { user, loggedIn } = useContext(UserContext)
  console.log(user)

  if (loggedIn) {
    return (
      <div>
        <Card style={{ width: '18rem'}}>
          <Card.Title>{user.username}'s profile</Card.Title>
          <Card.Img src={user.image} alt="avatar"/>
        </Card>
        {/* <h3>{user.username}'s Home Page</h3>
        <img alt="avatar" src={user.image}/> */}
      </div>
    )
  } else {
    return (<h3>Please Login or Signup</h3>)
  }

}

export default Home;