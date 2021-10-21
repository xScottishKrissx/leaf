import * as React from 'react'

import './body.sass'

import { Container, Row, Col, Button } from 'react-bootstrap'

import placeholderPlant from '../../images/placeholderPlant.jpg'
import who1 from '../../images/who_1.png'
import who2 from '../../images/who_2.png'
import who3 from '../../images/who_3.png'


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

  
        <Row className="bodySection2">

          <Col lg={12}>
            <h1>Who are Leaf.com?</h1>
              <Row className="sectionContentWrapper m-0">
                <Col>
                  <img src={who1} />
                  <p>Database</p>
                </Col>

                <Col>
                  <img src={who2} />
                  <p>Preservation</p>
                </Col>

                <Col>
                  <img src={who3} />
                  <p>Knowledge</p>
                </Col>
              </Row>
          </Col>
        </Row>


        <Row className="bodySection3">

          <Col lg={12}>
            <h1>Plant Uses</h1>
              <Row className="sectionContentWrapper upper m-0 mb-3 ">

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

              <Row className="sectionContentWrapper m-0 lower">
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