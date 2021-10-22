import * as React from 'react'

import './uses.sass'

import { Container, Row, Col, Button } from 'react-bootstrap'

import placeholderPlant from '../../../images/placeholderPlant.jpg'

export const Uses = (props) =>{


    
return(
    <Row className="bodySection3 my-5">

    <Col lg={12}>
      <h1>Plant Uses</h1>
        <Row className="usesRow flex-row-reverse m-0 mb-3 ">

          <Col id="forcePaddingRight" md={6} className="d-flex justify-content-center justify-content-md-end">
            <img src={placeholderPlant} />
          </Col>

          <Col md={6} className="d-flex justify-content-center align-items-center">
            <div className="p-5">
              <h2>Edible</h2>
              <p>Plants bring homes to life, and they also bring life to your office. Adding plants into your space also helps to create a relaxing environment.</p>
              <p>Plants bring homes to life, and they also bring life to your office. Adding plants into your space also helps to create a relaxing environment.</p>
              <Button variant="success">Success</Button>
            </div>
          </Col>
        

        </Row>

        <Row className="usesRow m-0 lower">
          <Col id="forcePaddingLeft" md={6} className="d-flex justify-content-center justify-content-md-start">
            <img src={placeholderPlant} />
          </Col>
  
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <div className="p-5">
              <h2>Medicinal</h2>
              <p>We've gathered some of our most popular plants into sets to suit all types of plant parent, including those who need a bit of extra inspiration.</p>
              <p>Find your match</p>
              <Button variant="success">Success</Button>
            </div>
          </Col>

        </Row>
    </Col>

  </Row>
)

}

export default Uses;