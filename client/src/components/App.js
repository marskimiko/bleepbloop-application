// import logo from './logo.svg';
// import './App.css';
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Setups from './Setups';
import SetupDetails from './SetupDetails';
// import Instruments from './Instruments';

import { UserProvider, UserContext } from "../context/UserContext";

function App() {
  // const { user } = useContext(UserContext);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, [user, setUser]);

 


  return (
    <div className="app">
      <UserProvider>
        <Navigation />
          <Routes>
            {/* 3 user related paths */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/setups" element={<Setups />} />
            <Route exact path="/setups/:id" element={<SetupDetails />}/>
            {/* <Route exact path="/setups/:id" element={user.setups.map((setup) => 
              <SetupDetails setup={setup}/>
            )}/> */}
            {/* <Route exact path="/instruments" element={<Instruments />} /> */}
            {/* <Route exact path="/instruments" element={<Instruments />} /> */}
          </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
