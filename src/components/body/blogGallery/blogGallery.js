import * as React from 'react'

import './blogGallery.sass'

import { Row, Col } from 'react-bootstrap'

import placeholderPlant from '../../../images/placeholderPlant.jpg'

export const BlogGallery = (props) =>{
    
    return(
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
    )

}

export default BlogGallery;