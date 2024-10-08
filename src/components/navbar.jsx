import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => (
  <BootstrapNavbar variant='dark' expand="lg" className=' bg-primary px-4'>
    <BootstrapNavbar.Brand as={Link} to="/">Il tuo meteo</BootstrapNavbar.Brand>
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