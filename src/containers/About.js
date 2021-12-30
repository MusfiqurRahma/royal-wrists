import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div style={{marginTop:'30px'}}>
            <h2 style={{fontWeight:'900'}}>HELLO!WE ARE ROYAL WRISTS FAMILY</h2> 
            <p>Royal Wrists is lead by innovation and nurtured with the consistency of quality and brand personality. Founded 20 years ago , with the belief that supremely crafted timepieces can be offered for modest sums, SEWOR holds true to this objective today and continues its glorious journey. The brand now grown to 20 collections.With its most inspired creations ,we combine traditional history with fashion elegance, we demonstrates its technical and design prowess.By being true to our convictions, let all those who possess our timepieces and pass through our doors witness the quality, value and care in every piece we create, and the spirit of never-ending possibilities in everything we do.Utilizing high quality materials generally found only in high-priced brands, each timepiece is crafted and rigorously tested to ensure optimum standards.From skeletonized movements to a unique gold layering technique to exceptional construction, SEWOR has become one of the most technically capable watch makers.</p>
            <Container>
            <Row>
              <Col xs={12} md={4}>
               <i className="fab fa-usps" style={{fontSize:'30px'}}></i>
              <p>Each SEWOR watch will be detected and check well and be buckled the "SEWOR" Brand Tag.Use the exclusive packaging,soft and luxurious,the best choice for gift. Benefit for you.</p>          
              </Col>
              <Col xs={12} md={4}>
                        <i className="fas fa-headphones-alt" style={{fontSize:'30px'}}></i>
                        <p>Formal-Dress up on different occasions, such as weddings and parties. Business-Note the time assignments or read the time when need it. Casual-Decorations for casual clothing.</p>          
              </Col>
              <Col xs={12} md={4}>
                        <i className="far fa-gem" style={{ fontSize: '30px' }}></i>
                        <p>We combine technical excellence with world-class craftsmanship, to deliver a range of fine timepieces that reflect timeless style.</p>          
                </Col>
              </Row>
            </Container>
        </div>
    );
};

export default About;