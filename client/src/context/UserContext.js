import React, { useState, useEffect } from "react";

// create context
const UserContext = React.createContext();


// create a provider component
function UserProvider({ children }) {
  // const [user, setUser] = useState(null)
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [setups, setSetups] = useState([])
  const [instruments, setInstruments] = useState([])

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
      if (data.error) {
        setLoggedIn(false)
      } else {
        setLoggedIn(true)
        
        // might need to swtich to fetchInstruments(need to build this function if so) still figuring this out basing this off of following lecture video for now 
        fetchSetups()
        // fetchInstruments()
      }
    })
  }, [])

  const fetchSetups = () => {
    fetch('/setups')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setSetups(data)
    })
  }

  // taking in a setup below becuase coming from some form, this is what nancy said for her projec, i am not sure yet if this would also apply here
  const addSetup = (setup) => {
    fetch('/setups', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(setup)
    })
    .then(res => res.json())
    .then(data => {
      setSetups([...setups, data])
    })
  }

  // const fetchInstruments = () => {
  //   fetch('/instruments')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // }

  const login = (user) => {
    setUser(user)
    fetchSetups()
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
    <UserContext.Provider value={{user, login, logout, signup, loggedIn, setups, addSetup}}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

// the reason its good to put in global state is b/c every time you refresh the page this gets refereshed. If you have a fetch reques to '/me' if someone refreshes any page it comes in here and refreshes. Good place to put the user getting the user