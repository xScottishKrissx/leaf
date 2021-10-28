import * as React from 'react'
import './gallery.sass'
import {  Button, Row, Col, CloseButton } from 'react-bootstrap'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useState } from 'react'

import { BiWorld } from 'react-icons/bi'
import { BsBrightnessHigh, BsDropletFill } from 'react-icons/bs';
import {IoMdTimer} from 'react-icons/io'
import {IoColorPaletteOutline} from 'react-icons/io5'
import {VscSymbolRuler} from 'react-icons/vsc'
import {GoLinkExternal} from 'react-icons/go'
import Modal from '../../modal/modal'

export const Gallery = (props) =>{
  const [plantInfo, setPlantInfo] = useState([])
  const [displayPopup, setPopupStatus] = useState(false)
  // console.log(props.posts)

  function showPopup(e,info){
    setPopupStatus(true)
    setPlantInfo(info)
    console.log(e.currentTarget.getElementsByTagName("div")[0])
    // This works
    // e.currentTarget.getElementsByTagName("div")[0].classList.add("showWrapper")
    // let checkTarget = e.currentTarget.getElementsByTagName("div")[0]

    // document.getElementById("popup").classList.remove("hideWrapper")
    // document.getElementById("popup").classList.add("showWrapper")
  }

  function hidePopup(){
    setPopupStatus(false)
    // console.log("Hide Popup")
    // document.getElementById("popup").classList.remove("showWrapper")
    // document.getElementById("fullPageMsg").classList.remove("showMsg")

    // document.getElementById("popup").classList.add("hideWrapper")
  }

  function showMsg(){
    console.log("showMsg")
    document.getElementById("fullPageMsg").classList.add("showMsg")
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

      {displayPopup === true ? <Modal plantInfo={plantInfo} /> : <p>Don't Show Popup</p>}




{/*         
        <div className="popupWrapper d-flex align-items-center justify-content-center position-fixed h-100 w-100 p-0" id="popup" >
          
          <Row className="popupContent d-flex w-100" onClick={null}>
          <CloseButton id="closePopupBtn" onClick={()=>hidePopup()} aria-label="Hide" className="bottom-sm-0 left-sm-0"  />
              <Col sm={4} md={6} className="popupColumn1 p-0">

                <GatsbyImage image={getImage((plantInfo.image))} alt="" className="w-100" />

                <div className="d-flex justify-content-evenly">

                  <div sm={6} className="d-flex flex-column">
                    <span title="Light Levels"><BsBrightnessHigh /> {plantInfo.light}</span>
                    <span title="Water Requirements"><BsDropletFill />{plantInfo.water}</span>
                    <span title="Colours"><IoColorPaletteOutline />{plantInfo.colour}</span>
                  </div>

                  <div sm={6} className="d-flex flex-column">
                    <span title="Maximum Height"><VscSymbolRuler />{plantInfo.maxHeight}</span>
                    <span title="Maximum time to full height"><IoMdTimer />{plantInfo.maxTimeToGrow}</span>
                    <span title="Native To"><BiWorld />{plantInfo.nativeTo}</span>             
                  </div>

                </div>

              </Col>

              <Col sm={8} md={6} className="popupColumn2 d-flex flex-column align-items-center justify-content-center">
                <Row>
                  <Col className="text-center">                
                  <h1 id="commonName">{plantInfo.commonName}</h1>
                  <h4 id="latinName">{plantInfo.latinName}</h4>
                  <h5 id="family">{plantInfo.family}</h5>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p id="about">{plantInfo.about}</p>
                  </Col>
                </Row>

                
              </Col>
              <Button className="fullPageLink" onClick={()=>showMsg()} variant="primary"><GoLinkExternal /></Button>
              <div id="fullPageMsg"><p>This is when you would be taken to a full separate page</p></div>
              
          </Row>

          <div onClick={()=>hidePopup()} id="popupBackground" className="popupBackground position-absolute h-100 w-100" ></div>

        </div> */}
        
  </Row>
)

}

export default Gallery;


