import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Footer = () => {
    return (
       <> <Container style={{marginTop:'50px',padding:'20px'}}>
            <Row>
             <Col xs={12} md={3}>
                    <h5>ABOUT US</h5>
                    <p>The Royal Wrists is a leading retailer of brand name designer watches for all watch brands listed on our website. We pride ourselves on having one of the most efficient shopping systems available with communication at every stage.</p>
                    <p>Shah Saheb Lane 47/2,Narinda,Dhaka</p>
                    <p>Phone: +8801700000000</p>
                    <p>Email: royal@wrists.com</p>
             </Col>
                <Col xs={12} md={3}>
                    <h5>INFORMATION</h5>
                    <p>About Us</p>
                    <p>Search</p>
                    <p>WishList</p>
                    <p>Contact</p>
             </Col>
                <Col xs={12} md={3}>
                    <h5>ACCOUNT</h5>
                    <p>Wishlist</p>
                    <p>Your Cart</p>
                    <p>Checkout</p>
                    <p>Login</p>
             </Col>
                <Col xs={12} md={3}>
                    <h5>NEWSLETTER</h5>
                    <p>Signup to receive our latest news and promotion</p>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
             </Col>
            </Row> 
        </Container> <hr />
            <i className="fab fa-facebook" style={{
                marginRight: '10px',
                fontSize: '25px'
            }}></i>
            <i className="fab fa-twitter" style={{marginRight:'10px',fontSize:'25px'}}></i>
            <i className="fab fa-instagram" style={{
                marginRight: '10px',
                fontSize: '25px'
            }}></i>
            <i className="fab fa-youtube" style={{marginRight:'10px',fontSize:'25px'}}></i>
            <i className="fab fa-google-plus-g" style={{
                marginRight: '10px'
                , fontSize: '25px'
            }}></i>
            <p>© Copyright 2021 Royal Wrists.</p>
        </>
    );
};

export default Footer;