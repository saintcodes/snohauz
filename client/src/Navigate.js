import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Nav, Container } from 'react-bootstrap'
import { Avatar } from '@mui/material'


function Navigate({user, setUser}) {
  const navigate = useNavigate()

  function handleLogout() {
    console.log('123')
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(false);
      }
    })
    .then(navigate("/"));
  }
  console.log(user)


  return (
    // <div>
      <Container className="navigation-container">
         {user && user.username ? (
        <Nav id='nav-bar'>
          <h3 className='logo-header'>SnoHauz</h3>
          <br></br>
            <span className='user-span'>
              Welcome, <strong><em>{user.username}!</em></strong>
            </span>
            &nbsp;&nbsp;
              <Avatar alt={user.username} src={user.image} /> 
          <br></br>
          <ul><Nav.Link href="/home">
            Home
          </Nav.Link></ul>
          <br/>
          <ul><Nav.Link href="/about">
            About
          </Nav.Link></ul>
          <br/>
          <ul><Nav.Link href="/new">
            New Entry
          </Nav.Link></ul>
          <br/>
          <ul><Nav.Link href="/my-profile">
            Profile
          </Nav.Link></ul>
          <br/>
          <ul><Nav.Link href="/" onClick={() => handleLogout()}>
            Logout
          </Nav.Link></ul>
        </Nav>
      ): null}
      </Container>
    // </div>
  )
}

export default Navigate