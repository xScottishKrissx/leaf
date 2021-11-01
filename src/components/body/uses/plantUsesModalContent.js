import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function PlantUsesModalContent(props) {

    return (
        <Row className="plantUsesModal justify-content-center">
            <Col md={6} className="p-0 border-top-left-radius-20">
                <GatsbyImage image={getImage(props.plantUsesInfo.image)} alt="" />
            </Col>
            
            <Col md={6} className=" d-flex flex-column justify-content-center pe-5">
                <h1>{props.plantUsesInfo.title}</h1>
                <p>{props.plantUsesInfo.modalDescription}</p>
            </Col>

        </Row>
    )
}
