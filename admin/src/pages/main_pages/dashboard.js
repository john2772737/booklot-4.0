import React from 'react';
import Container from 'react-bootstrap/Container';
import './dashboard.css'; // Import your CSS file

function Dashboard() {
  return (
    <div className='overview'>
    <h1>Overview</h1>
    <Container fluid className="outer-container"> {/* Outer container */}
      <Container className="inner-container">
        {/* First inner container */}
        <div className="box-container">
          <h2>Container 1</h2>
        </div>
      </Container>

      <Container className="inner-container">
        {/* Second inner container */}
        <div className="box-container">
          <h2>Container 2</h2>
        </div>
      </Container>

      <Container className="inner-container">
        {/* Third inner container */}
        <div className="box-container">
          <h2>Container 3</h2>
        </div>
      </Container>

      <Container className="inner-container">
        {/* Fourth inner container */}
        <div className="box-container">
          <h2>Container 4</h2>
        </div>
      </Container>
    </Container>
    </div>
  );
}

export default Dashboard;
