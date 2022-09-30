import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  let navigate = useNavigate();

  const logOut=()=>{
    localStorage.removeItem('token');
    navigate("/");
  }  
  return (
    <Navbar bg="primary" variant="primary">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/home">Home</Link>
        </Nav>
        <Nav className="me-auto">
          <button onClick={logOut}>log Out</button>
        </Nav>
        <Link className="btn btn-outline-light" to="/AddTransaction" >Add Transaction</Link>
      </Container>
    </Navbar>
  )
}
export default Topbar;