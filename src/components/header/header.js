import * as React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import leaf from '../../images/leaf.png'

import './header.sass'

export const Header  = (props) => {
    return  (

        <Container fluid >  
            <Row className="header"> 

                <Col className="p-0">

                    <div className="
                        section1 
                        d-flex 
                        flex-column
                        justify-content-center 
                        align-items-center
                        position-relative
                    ">

                        <span className="heroImage w-100 h-100"></span>

                        <div className="position-absolute">
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