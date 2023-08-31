import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Setups from './Setups';
import SetupDetails from './SetupDetails';
import InstrumentContainer from './InstrumentContainer';

import { UserProvider } from "../context/UserContext";

function App() {

  return (
    <div className="app">
      <UserProvider>
        <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/setups" element={<Setups />} />
            <Route exact path="/setups/:id" element={<SetupDetails />}/>
            <Route exact path="/instruments" element={<InstrumentContainer />}/>
          </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
