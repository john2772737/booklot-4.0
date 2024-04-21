import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'; 
import './navbar_style.css';

function Sidebar({ links }) {
  const [showBurgerNav, setShowBurgerNav] = useState(false);

  const toggleBurgerNav = () => {
    setShowBurgerNav(!showBurgerNav);
  };

  return (
    <div className={`burger-navbar${showBurgerNav ? ' open' : ''}`}>
      <Container fluid>
        <Nav className="flex-column">
          {links &&
            links.map((link, index) => (
              <Link key={index} to={link.to} className="nav-link">{link.text}</Link>
            ))}
        </Nav>
      </Container>
    </div>
  );
}

export default Sidebar;
