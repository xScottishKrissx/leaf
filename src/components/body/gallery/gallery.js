import * as React from 'react'
import './gallery.sass'
import {  Row, Col } from 'react-bootstrap'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useState } from 'react'


export const Gallery = (props) =>{
  const [plantInfo, setPlantInfo] = useState([])
  console.log(props.posts)

  function showPopup(e,info){
    setPlantInfo(info)
    console.log(e.currentTarget.getElementsByTagName("div")[0])
    // This works
    // e.currentTarget.getElementsByTagName("div")[0].classList.add("showWrapper")
    let checkTarget = e.currentTarget.getElementsByTagName("div")[0]

    document.getElementById("popup").classList.remove("hideWrapper")
    document.getElementById("popup").classList.add("showWrapper")
  }

  function hidePopup(){
    // console.log("Hide Popup")
    document.getElementById("popup").classList.remove("showWrapper")
    document.getElementById("popup").classList.add("hideWrapper")
  }

    const mapGallery = props.posts.map(obj => {
        return(
  
        <Col key={obj.frontmatter.image.id} xl={4} md={6} sm={6} onClick={(e)=>showPopup(e,obj.frontmatter)}>
          <div className="d-flex flex-row align-items-center w-100 mt-4">
            <GatsbyImage image={getImage(obj.frontmatter.image)} alt="" />
            <div className="px-3">
              <h3 className="m-0">{obj.frontmatter.commonName}</h3>
              <span className="w-90">{obj.frontmatter.latinName}</span>
              {/* <p>{obj.frontmatter.about}</p> */}
            </div>
          </div>
  
  
        </Col>
        )
    })
    console.log(plantInfo.about)
return(
    <Row className="my-5">
      
      <Col lg={12}>
        <div>
          <h1>Plant Gallery</h1>
          <Row className="galleryItemWrapper" > {mapGallery} </Row>
        </div>
      </Col>

    
      {plantInfo.length > 0 ? <p>Show</p> : <p>Dont Show</p>}
        <div className="popupWrapper d-flex align-items-center justify-content-center position-fixed h-100 w-100 p-0" id="popup" >
        
        <div className="popupContent d-flex align-items-center w-100" onClick={null}>

            <div className="popupColumn1">
            <h1>Image</h1>
            </div>
            <div className="popupColumn2">
            <h1>{plantInfo.commonName}</h1>
            <h2>Text</h2>
            </div>

        </div>
        <div onClick={()=>hidePopup()} className="popupBackground position-absolute h-100 w-100" ></div>
        </div>
   
  </Row>
)

}

export default Gallery;


