import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/wrists-logo.png';
import bannerImage from '../images/Watch_banner-2-removebg-preview.png';
import './NavsAndHeader.css';
import useAuth from '../hook/useAuth';

const NavsAndHeader = () => {
    const { user,logOut } = useAuth();
    return (
        <div style={{marginBottom:'100px'}}>
        <Navbar bg="light" variant="light" sticky='top' collapseOnSelect expand="lg" style={{backgroundColor:'#0a1735'}}>
                <Container>
                    <Navbar.Brand href="#home"><img style={{marginLeft:'60px',width:'100px'}} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse style={{marginLeft:'50%'}}>
                        <Nav className='text-primary'>
                            <Nav.Link className='text-black fw-bold navbar' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='text-black fw-bold navbar' as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className='text-black fw-bold navbar' as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link className='text-black fw-bold navbar' as={Link} to="/dashboard">Dashboard</Nav.Link>
                            
                            {
                                user.email ? <button
                                    className='btn-login'
                                    onClick={logOut}>Log Out</button> : <Link
                                        className="btn-logout" to='/login'><button>Login</button></Link>
                            }
                            {
                                user.email ? <img style={{
                                    width: '40px', borderRadius: '50px',
                                    marginLeft: '15px'
                                }} src={user.photoURL} alt="" /> : <img
                                    style={{ width: '40px', borderRadius: '50px', marginLeft: '15px' }} 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnvWTZm8CrKxV_zBpTI2Gdvbmy2-Az8CgNw&usqp=CAU" alt="" />
                
              }    
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