import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#1e1e2f' }} variant="dark">
      <Container>
        <Navbar.Brand href="#">CS 330L Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;