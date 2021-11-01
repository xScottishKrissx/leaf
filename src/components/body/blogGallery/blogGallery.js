import * as React from 'react'
import { useState, useEffect } from 'react'

import './blogGallery.sass'

import { Row, Col } from 'react-bootstrap'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Modal from '../../modal/modal'

export const BlogGallery = (props) =>{
  const [blogInfo, setBlogInfo] = useState([])
  const [displayPopup, setPopupStatus] = useState(false)

  function showPopup(e,info){
    if(displayPopup === true)setPopupStatus(false)
    if(displayPopup === false)setPopupStatus(true)
    setBlogInfo(info)
  }






















 
  const mapBlogs = props.blogPages.map(x => {
    return(
      <Col key={x.frontmatter.image.id} xs={6} sm={6} lg={3} className="mb-3" onClick={(e)=>showPopup(e,x.frontmatter)}>
        <div  className="blogItem pb-3">
        <GatsbyImage image={getImage(x.frontmatter.image)} alt="" />
          <h3 className="m-2">{x.frontmatter.title}</h3>
          <p className="m-2">{x.frontmatter.excerpt}</p>
        </div>
      </Col>
    )
  })
  
    return(
        <Row className="bodySection4 my-5">
          
          <Col>
            <h1>Blog Pages</h1>
              <Row className="blogGalleryItemWrapper">
                {mapBlogs}
              </Row>
          </Col>

          {displayPopup === true ?
          <Modal blogInfo={blogInfo} show={true} updateState={setPopupStatus} blogGalleryModal={true}/> 
         :null
      }

          </Row>

          
    )

}

export default BlogGallery;