import * as React from 'react'

import './footer.sass'

import { Container, Row, Col, Button } from 'react-bootstrap'

import leaf from '../../images/leaf.png'

export const Footer = (props) =>{
    
return(
    <Container fluid="lg" className="footer pb-4">
  
    <Row className="justify-content-lg-center">
      <Col lg="12">
           <div className="d-flex justify-content-center align-items-center">
              <img className="p-3" src={leaf} />
           </div>
      </Col>
    </Row>


  </Container>
)

}

export default Footer;