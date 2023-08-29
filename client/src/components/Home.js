import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


function Home() {
  const { user, loggedIn } = useContext(UserContext)

  if (loggedIn) {
    return (
      <div class="profilecard">
        <img src={user.image || user.photo} alt="avatar" style={{ width: '100%' }}/>
        <h1>{user.username}</h1>
      </div>
    )
  } else {
    return (
      <div class="homecontainer">
        <p>PLEASE LOGIN OR SIGNUP</p>
      </div>
    )
  }

  // if (loggedIn) {
  //   return (
  //     <Container>
  //       <Row className="m-auto align-self-center">
  //         <Col>
  //           <Card style={{ width: '18rem'}}>
  //             <Card.Title>{user.username}'s profile</Card.Title>
  //             <Card.Img src={user.image} alt="avatar"/>
  //           </Card>
  //         </Col>
  //       </Row>
  //     </Container>
  //   )
  // } else {
  //   return (
  //     <div class="homecontainer">
  //       <p>PLEASE LOGIN OR SIGNUP</p>
  //     </div>
  //   )
  // }

}

export default Home;