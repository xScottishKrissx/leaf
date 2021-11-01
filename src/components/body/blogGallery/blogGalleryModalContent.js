import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Container, Row, Col, Button } from 'react-bootstrap'


export default function BlogGalleryModalContent(props) {
    return (
        <Row className="blogGalleryContent ">
            <Col className="blogGalleryImage" md={6}><GatsbyImage className="w-100 h-100" image={getImage(props.blogInfo.image)} alt="" /></Col>
            <Col className="d-flex flex-column justify-content-center pe-5">
                <h1>{props.blogInfo.title}</h1>
                <p>{props.blogInfo.modalText}</p>
            </Col>
        </Row>
    )
}
