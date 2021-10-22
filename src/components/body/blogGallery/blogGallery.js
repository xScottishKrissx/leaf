import * as React from 'react'

import './blogGallery.sass'

import { Row, Col } from 'react-bootstrap'

import placeholderPlant from '../../../images/placeholderPlant.jpg'

export const BlogGallery = (props) =>{
    
    return(
        <Row className="bodySection4 my-5">

          <Col lg={12}>
            <h1>Blog Pages</h1>
              <Row className="blogGalleryItemWrapper">
                <Col sm={6} lg={3} className="mb-3">
                  <div className="pb-3">
                    <img className="w-100" src={placeholderPlant} />
                    <p className="m-2">Blog Title</p>
                    <p className="m-2">Blog Copy</p>
                  </div>
                </Col>

                <Col sm={6} lg={3} className="mb-3">
                  <div className="pb-3">
                    <img className="w-100" src={placeholderPlant} />
                    <p className="m-2">Blog Title</p>
                    <p className="m-2">Blog Copy</p>
                  </div>
                </Col>

                <Col sm={6} lg={3} className="mb-3">
                  <div className="pb-3">
                    <img className="w-100" src={placeholderPlant} />
                    <p className="m-2">Blog Title</p>
                    <p className="m-2">Blog Copy</p>
                  </div>
                </Col>

                <Col sm={6} lg={3} className="mb-3">
                  <div className="pb-3">  
                    <img className="w-100" src={placeholderPlant} />
                    <p className="m-2">Blog Title</p>
                    <p className="m-2">Blog Copy</p>
                  </div>
                </Col>
              </Row>
          </Col>

          </Row>
    )

}

export default BlogGallery;