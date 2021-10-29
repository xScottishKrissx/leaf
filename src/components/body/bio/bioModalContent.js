import React from 'react'
import { Row, Col} from 'react-bootstrap'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function BioModalContent(props) {

    return(
        <Row  className="bioModalContent p-0">
            <Col md={6} className="d-flex align-items-center p-0">
                <GatsbyImage  image={getImage(props.bioInfo.modalImage)} alt="" />
            </Col>
            
            <Col className="d-flex align-items-center pe-5">
                <Row >
                    <Col >
                        <h2>{props.bioInfo.title}</h2>
                        <p>{props.bioInfo.description}</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
