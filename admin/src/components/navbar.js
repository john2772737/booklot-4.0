import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; // Import Button component
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomNavbar({ brand, search, user, settings, links, Logout }) {
  const [showBurgerNav, setShowBurgerNav] = useState(true); // Set to true by default

  return (
    <div className="sticky-top"> 
      {/* Main Navbar */}
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand href="#">{brand}</Navbar.Brand>
          {/* Burger Navbar */}
          <div className={`burger-navbar${showBurgerNav ? ' open' : ''}`}>
            <Container fluid>
              <Nav className="flex-column">
                {/* Mapping over the links array */}
                {links &&
                  links.map((link, index) => (
                    <Link key={index} to={link.to} className="nav-link">
                      {link.text}
                    </Link>
                  ))}
              </Nav>
            </Container>
          </div>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll />
            <Form className="d-flex align-items-center">
              <Form.Control type="search" placeholder="Search" className="search-bar me-2" aria-label="Search" />
              <Button variant="outline-success" className="search-button">
                {search}
              </Button>
            </Form>
            <div className="user-info">
              {user}
              <Button variant="outline-primary" className="settings-button">
                {settings}
              </Button>
              <Button onClick={Logout}>Logout</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div> 
  );
}

export default CustomNavbar;
