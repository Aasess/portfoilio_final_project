// Ashish Neupane, Bipin Gurung, Sandeep Kaur
import React, { useState, useEffect } from 'react'

//REACT-ROUTER-DOM
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//COMPONENT
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Project from './components/Project'
import ProfileModal from './components/ProfileModal'

//CSS
import './css/Common.css'
import './css/App.css'

//ICONS
import { FaUserEdit } from 'react-icons/fa'

function App() {
  // state to track selected user
  const [selectedUser, setSelectedUser] = useState(null)

  //state to open modal
  const [show, setShow] = useState(false)

  //function to open modal for changing user
  const onClick = () => {
    setSelectedUser(null)
    setShow(true)
  }

  //sideeffects
  useEffect(() => {
    if (!selectedUser) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [selectedUser])
  return (
    <>
      <div className="App container">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home selectedUser={selectedUser} />
            </Route>

            <Route exact path="/about">
              <About selectedUser={selectedUser} />
            </Route>

            <Route exact path="/experience">
              <Experience selectedUser={selectedUser} />
            </Route>

            <Route exact path="/projects">
              <Project selectedUser={selectedUser} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>

      <ProfileModal
        {...{ show, setSelectedUser }}
        handleClose={() => setShow(false)}
      />

      <button
        className="changeuser-button"
        onClick={onClick}
        title="Change User"
      >
        <FaUserEdit size={36} color="#fff" />
      </button>
    </>
  )
}

export default App
