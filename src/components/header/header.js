import * as React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import leaf from '../../images/leaf.png'

import './header.sass'

export const Header  = (props) => {
    return  (

        <Container fluid >  
            <Row className="header"> 

                <Col >

                    <div className="section1">

                        <span className="heroImage"></span>

                        <div>
                            <span>welcome to</span>
                            <h1>leaf.com </h1>
                            <img src={leaf} />
                        </div>

                    </div>
                </Col>
            </Row>
      </Container>
    )
}

export default Header