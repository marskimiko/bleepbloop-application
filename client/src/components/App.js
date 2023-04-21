// import logo from './logo.svg';
// import './App.css';
import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Login from './Login';

import { UserProvider } from "../context/UserContext";

function App() {
  // const { user, setUser } = useContext(UserContext);

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
        <Navigation>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Navigation>
      </UserProvider>
    </div>
  );
}

export default App;
