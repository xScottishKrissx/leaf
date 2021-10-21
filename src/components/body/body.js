import * as React from 'react'

import './body.sass'

import { Container, Row, Col, Button } from 'react-bootstrap'

import placeholderPlant from '../../images/placeholderPlant.jpg'



import Gallery from './gallery/gallery'
import Uses from './uses/uses'
import Bio from './bio/bio'
import BlogGallery from './blogGallery/blogGallery'

export const Body = (props) => {



    return (
        <div>
                  <Container className="bodyContent" fluid="lg">
                    <Gallery posts={props.posts}/>
                    <Bio />
                    <Uses />
                    <BlogGallery />

  





        <Row className="bodySection4">

          <Col lg={12}>
            <h1>Blog Pages</h1>
              <Row className="sectionContentWrapper">
                <Col sm={6} lg={3}>
                  <div className="pb-3">
                    <img src={placeholderPlant} />
                    <p>Blog Title</p>
                    <p>Blog Copy</p>
                  </div>
                </Col>

                <Col sm={6} lg={3}>
                  <div>
                    <img src={placeholderPlant} />
                    <p>Blog Title</p>
                    <p>Blog Copy</p>
                  </div>
                </Col>

                <Col sm={6} lg={3}>
                  <div>
                    <img src={placeholderPlant} />
                    <p>Blog Title</p>
                    <p>Blog Copy</p>
                  </div>
                </Col>

                <Col sm={6} lg={3}>
                  <div>
                    <img src={placeholderPlant} />
                    <p>Blog Title</p>
                    <p>Blog Copy</p>
                  </div>
                </Col>
              </Row>
          </Col>

          </Row>
  
      </Container>

        </div>
    )
}

export default Body