import * as React from 'react'

import './gallery.sass'

import { Container, Row, Col, Button } from 'react-bootstrap'

import placeholderPlant from '../../../images/placeholderPlant.jpg'


export const Gallery = (props) =>{
  console.log(props.posts)

  function showPopup(e,title,body){
    // console.log(e.currentTarget.getElementsByTagName("div")[0])
    // This works
    e.currentTarget.getElementsByTagName("div")[0].classList.add("showWrapper")
  }
  function hidePopup(){
    // console.log("Hide Popup")
    // document.getElementById("popup").classList.remove("showWrapper")
  }

    const mapGallery = props.posts.map(obj => {
      // console.log(obj.frontmatter.title)
        return(
  
  
        <Col xl={4} md={6} sm={6} onClick={(e)=>showPopup(e, obj.frontmatter.title,obj.frontmatter.title)}>
          <div className="d-flex flex-row align-items-center w-100 mt-4">
            <img src={placeholderPlant} />
            <div className="p-3">
              <h3 className="m-0">{obj.frontmatter.title}</h3>
              <span className="w-90">laternus nameinus</span>
            </div>
          </div>
  
  
        </Col>
        )
    })
    
return(
    <Row className="my-5">
  
      <Col lg={12}>
        <div>
          <h1>Plant Gallery</h1>
          <Row className="galleryItemWrapper" > {mapGallery} </Row>
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