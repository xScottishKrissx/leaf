import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Container, Row, Col, Button } from 'react-bootstrap'


export default function BlogGalleryModalContent(props) {
    return (
        <Row>
            <Col md={6}><GatsbyImage image={getImage(props.blogInfo.image)} alt="" /></Col>
            <Col>
                <h1>{props.blogInfo.title}</h1>
                <p>{props.blogInfo.modalText}</p>
            </Col>
        </Row>
    )
}
