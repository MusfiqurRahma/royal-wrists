import React from 'react';
import { Button, Col,Container,Navbar,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div>
            <Row>
            <Navbar style={{backgroundColor:'#24272b'}}>
              <Container>
                <Navbar.Brand href="#home" style={{color:'white'}}>Dashboard</Navbar.Brand>
                 <Navbar.Toggle />
                 <Navbar.Collapse className="justify-content-end">
               </Navbar.Collapse>
                </Container>
                  </Navbar>
                <Col xs={12} md={3} style={{backgroundColor:'gray',height:'92vh'}}>
                    <Link to='/home' style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}><Button>Home</Button> </Link><br/><br/> 
                     <Link to='/AddProducts' style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}><Button>Add Product</Button></Link><br/> <br/>  
                     <Link to='/review' style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}><Button>Review</Button> </Link><br/><br/> 
                     <Link to='/logout' style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}><Button>Logout</Button> </Link>
                </Col>
                <Col xs={12} md={9}>
                    <h4>Under Construction</h4>    
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;