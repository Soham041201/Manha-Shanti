import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
export default function NavigationBar() {
    return (
        <div>
           <Navbar bg="light" sticky="top" expand="lg">
  <Container>
    <Navbar.Brand className="title" href="/home">Manha Shanti</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="home" href="/home">Home</Nav.Link>
        <Nav.Link className="podcast" href="/podcast">Podcasts</Nav.Link>
        <Nav.Link className="music" href="/music">Music</Nav.Link>
        <Nav.Link className="diary" href="/diary">Diary</Nav.Link>
        <Nav.Link className="sign-in" href="/login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            {/* Create a Navbar using bootstrap components */}
        </div>
    )
}
