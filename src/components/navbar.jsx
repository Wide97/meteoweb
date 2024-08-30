import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => (
  <BootstrapNavbar bg="dark" variant="dark" expand="lg">
    <BootstrapNavbar.Brand as={Link} to="/">Weather App</BootstrapNavbar.Brand>
    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
    <BootstrapNavbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav>
    </BootstrapNavbar.Collapse>
  </BootstrapNavbar>
);

export default Navbar;