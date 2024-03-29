import React, { useState, useEffect } from "react";

// create context
const UserContext = React.createContext();


// create a provider component
function UserProvider({ children }) {
  // const [user, setUser] = useState(null)
  const [user, setUser] = useState({})
  // const [user, setUser] = useState({
  //   id: null,
  //   name: "",
  //   setups: [],
  //   username: ""
  // });
  const [loggedIn, setLoggedIn] = useState(false)
  // const [setups, setSetups] = useState([])
  // const [instruments, setInstruments] = useState([])
  const [allInstruments, setAllInstruments] = useState([])
  // const [instruments, setInstruments] = useState([])

  // useEffect(() => {
  //   fetch('/me')
  //   .then(res => res.json())
  //   .then(data => {
  //     setUser(data)
  //   })
  // }, [])

  // console.log(user, 'user')

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data)
      if (data.error) {
        setLoggedIn(false)
      } else {
        setLoggedIn(true)
        fetchInstruments()
      }
    })
  }, [])
  // instead of having this fetchSetups funciton and calling it throughout this component, try to send nested json by using a serializer so you dont have to call multiple fetches and keep calling the funciton repeatedly

  // const fetchSetups = () => {
  //   fetch('/setups')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setSetups(data)
  //   })
  // }

  // taking in a setup below becuase coming from some form, this is what nancy said for her projec, i am not sure yet if this would also apply here

  // const addSetup = (setup) => {
  //   fetch('/setups', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json'},
  //     body: JSON.stringify(setup)
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     setSetups([...setups, data])
  //   })
  // }

  const fetchInstruments = () => {
    fetch('/instruments')
    .then(res => res.json())
    .then(data => {
      // setInstruments(data)
      setAllInstruments(data)
      // console.log('usercontext instruments', data)
    })
  }

  const login = (user) => {
    setUser(user)
    // fetchSetups()
    fetchInstruments()
    setLoggedIn(true)
  }
  
  const logout = () => {
    setLoggedIn(false)
    setUser({})
    // setInstruments([])
    setAllInstruments([])
  }

  const signup = (user) => {
    setUser(user)
    // fetchSetups()
    fetchInstruments()
    setLoggedIn(true)
  }

  return (
    <UserContext.Provider value={{user, setUser, login, logout, signup, loggedIn, allInstruments, setAllInstruments}}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

// the reason its good to put in global state is b/c every time you refresh the page this gets refereshed. If you have a fetch reques to '/me' if someone refreshes any page it comes in here and refreshes. Good place to put the user getting the user