import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h2>HELLO!WE ARE ROYAL WRISTS FAMILY</h2> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus aliquam architecto omnis expedita adipisci velit nobis quos inventore voluptatem repellat facere vitae voluptates magni fugiat fuga sunt quia maxime quas numquam excepturi, consectetur reiciendis sint dicta. Minima autem nostrum expedita tempore natus eum, sint iusto quidem debitis amet voluptates?</p>
            <Container>
            <Row>
              <Col xs={12} md={4}>
               <i className="fab fa-usps" style={{fontSize:'30px'}}></i>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit vel eum maxime vero nemo veniam modi ex aliquam dolorum! Accusantium, harum unde tempore non vitae earum excepturi odio in corporis.</p>          
              </Col>
              <Col xs={12} md={4}>
                        <i className="fas fa-headphones-alt" style={{fontSize:'30px'}}></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem amet, porro expedita praesentium cumque velit fugit saepe sit excepturi sapiente doloremque totam dolorum blanditiis laboriosam autem, magnam sint pariatur maiores?</p>          
              </Col>
              <Col xs={12} md={4}>
                        <i className="far fa-gem" style={{ fontSize: '30px' }}></i>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium modi, saepe quasi dicta odit aliquam, tenetur perferendis quae, facere eveniet iure nobis adipisci ad iste sequi. Sapiente explicabo ex molestiae!</p>          
              </Col>
            </Row>
            </Container>
        </div>
    );
};

export default About;