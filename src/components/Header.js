import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Navbar className="header" variant="dark" expand="lg">
    <Container className="d-flex">
      <Navbar.Brand>Steven Cruz</Navbar.Brand>
      <div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link><Link className="navbar-link" to="/">About</Link></Nav.Link>
          <Nav.Link><Link className="navbar-link" to="/contact">Contact</Link></Nav.Link>
          <Nav.Link><Link className="navbar-link" to="/portfolio">Portfolio</Link></Nav.Link>
          <Nav.Link><Link className="navbar-link" to="/resume">Resume</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Container>
  </Navbar>
  )
}

export default Header