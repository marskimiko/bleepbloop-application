import React, { useState, useEffect } from "react";

// create context
const UserContext = React.createContext();


// create a provider component
function UserProvider({ children }) {
  // const [user, setUser] = useState(null)
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  // useEffect(() => {
  //   fetch('/me')
  //   .then(res => res.json())
  //   .then(data => {
  //     setUser(data)
  //   })
  // }, [])

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data)
      data.error ? setLoggedIn(false) : setLoggedIn(true)
    })
  }, [])

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
  }
  
  const logout = () => {
    setUser({})
    setLoggedIn(false)
  }

  const signup = (user) => {
    setUser(user)
    setLoggedIn(true)
  }

  return (
    <UserContext.Provider value={{user, login, logout, signup, loggedIn}}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

// the reason its good to put in global state is b/c every time you refresh the page this gets refereshed. If you have a fetch reques to '/me' if someone refreshes any page it comes in here and refreshes. Good place to put the user getting the user