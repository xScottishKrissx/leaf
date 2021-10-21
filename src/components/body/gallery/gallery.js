import * as React from 'react'

import './gallery.sass'

import { Container, Row, Col, Button } from 'react-bootstrap'

import placeholderPlant from '../../../images/placeholderPlant.jpg'


export const Gallery = (props) =>{

    const mapGallery = props.posts.map(obj => {
        return(
  
  
        <Col xl={4} md={6} sm={6} onClick={()=>this.showPopup(obj.frontmatter.title,obj.frontmatter.title)}>
          <div>
            <img src={placeholderPlant} />
            <div>
              <h3>{obj.frontmatter.title}</h3>
              <span>laternus nameinus</span>
            </div>
          </div>
  
  
        </Col>
        )
    })
    
return(
    <Row className="bodySection1">
  
    <Col lg={12}>
      <div>
        <h1>Plant Gallery</h1>
        <Row className="itemWrapper" > {mapGallery} </Row>
      </div>
    </Col>

    

        {/* <div className="popupWrapper" id="popup" >
        
        <div className="popupContent" onClick={null}>

            <div className="popupColumn1">
            <h1>Image</h1>
            </div>
            <div className="popupColumn2">
            <h1>Title</h1>
            <h2>Text</h2>
            </div>

        </div>
        <div onClick={()=>this.hidePopup()} className="popupBackground" ></div>
        </div>
    */}
  </Row>
)

}

export default Gallery;