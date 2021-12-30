import React from 'react';
import {Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/wrists-logo.png';
import bannerImage from '../images/Watch_banner-2-removebg-preview.png';
import './NavsAndHeader.css';

const NavsAndHeader = () => {
    return (
        <div style={{marginBottom:'100px'}}>
        <Navbar bg="light" variant="light" sticky='top' collapseOnSelect expand="lg" style={{backgroundColor:'#0a1735'}}>
                <Container>
                    <Navbar.Brand href="#home"><img style={{marginRight:'40%',width:'100px'}} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse style={{marginLeft:'70%'}}>
                        <Nav className='text-primary'>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/login">Login</Nav.Link>
                            </Nav>                           
                            </Navbar.Collapse>                       
                </Container>
            </Navbar>
         <Row>
                <Col xs={12} md={6} style={{marginTop:'100px'}}>
                    <h2 style={{fontWeight:'900'}}>FOR YOUR <span style={{color:'#FF8C00'}}>LUXURY & ELEGANT</span></h2>
                    <h1 style={{fontWeight:'900',color:'#FF8C00'}}>UNISEX WRISTS</h1>
                    <h6>Watch with glittering eyes the whole world around you.</h6>
                    <button style={{
                        border: '1px solid gray',
                        padding: '10px',
                        borderRadius: '50px',
                        backgroundColor: '#ff8c00',
                        color: 'white'
                    }}><h4>Discover Now</h4></button>
                </Col>
                <Col xs={12} md={6}>
                    <img src={bannerImage} style={{width:'500px'}} alt="" />
                </Col>
         </Row>
      </div>
    );
};

export default NavsAndHeader;