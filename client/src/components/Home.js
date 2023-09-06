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
      <div className="profilecard">
        <img src={user.image || user.photo} alt="avatar" style={{ width: '100%' }}/>
        <h1>{user.username}</h1>
      </div>
    )
  } else {
    return (

      <body class="text-center">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">BLEEPBLOOP</h3>
          </div>
        </header>
        <main role="main" class="inner cover">
          <h1 class="cover-heading">Welcome!</h1>
          <p class="lead">BleepBloop is a website for electronic musicians to organize their dawless music setups. Rather than trying to remember different systems for various performances or songs, BleepBloop is a place where you can create and organize your creations in one space. Please signup or login above. For more information on how this application was created please click below. </p>
          <p class="lead">
            <a href="https://github.com/marskimiko/bleepbloop-application" class="btn btn-lg btn-secondary">Learn more</a>
          </p>
        </main>
      </div>
    </body>
      // <div className="homecontainer">
      //   <p>PLEASE LOGIN OR SIGNUP</p>
      // </div>
    )
  }

}

export default Home;