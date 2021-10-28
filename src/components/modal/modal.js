import React from 'react'

import { useState, useEffect } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {  Button, Row, Col, CloseButton } from 'react-bootstrap'

import { BiWorld } from 'react-icons/bi'
import { BsBrightnessHigh, BsDropletFill } from 'react-icons/bs';
import {IoMdTimer} from 'react-icons/io'
import {IoColorPaletteOutline} from 'react-icons/io5'
import {VscSymbolRuler} from 'react-icons/vsc'
import {GoLinkExternal} from 'react-icons/go'

export default function Modal(props) {
    // const [plantInfo, setPlantInfo] = useState([])
    // const [displayPopup, setPopupStatus] = useState(false)

    useEffect(() => {
        // setPopupStatus(true)
        console.log("Hide Wrapper")
        document.getElementById("popup").classList.remove("hideWrapper")
        document.getElementById("popup").classList.add("showWrapper")
    })




    function hidePopup(){
        // setPopupStatus(false)
        document.getElementById("popup").classList.remove("showWrapper")
        document.getElementById("fullPageMsg").classList.remove("showMsg")
        document.getElementById("popup").classList.add("hideWrapper")
    }

    function showMsg(){
        console.log("showMsg")
        document.getElementById("fullPageMsg").classList.add("showMsg")
      }

    return (


        
        
        <div className="popupWrapper d-flex align-items-center justify-content-center position-fixed h-100 w-100 p-0" id="popup" >
          
        <Row className="popupContent d-flex w-100" onClick={null}>
        <CloseButton id="closePopupBtn" onClick={()=>hidePopup()} aria-label="Hide" className="bottom-sm-0 left-sm-0"  />
            <Col sm={4} md={6} className="popupColumn1 p-0">

              <GatsbyImage image={getImage((props.plantInfo.image))} alt="" className="w-100" />

              <div className="d-flex justify-content-evenly">

                <div sm={6} className="d-flex flex-column">
                  <span title="Light Levels"><BsBrightnessHigh /> {props.plantInfo.light}</span>
                  <span title="Water Requirements"><BsDropletFill />{props.plantInfo.water}</span>
                  <span title="Colours"><IoColorPaletteOutline />{props.plantInfo.colour}</span>
                </div>

                <div sm={6} className="d-flex flex-column">
                  <span title="Maximum Height"><VscSymbolRuler />{props.plantInfo.maxHeight}</span>
                  <span title="Maximum time to full height"><IoMdTimer />{props.plantInfo.maxTimeToGrow}</span>
                  <span title="Native To"><BiWorld />{props.plantInfo.nativeTo}</span>             
                </div>

              </div>

            </Col>

            <Col sm={8} md={6} className="popupColumn2 d-flex flex-column align-items-center justify-content-center">
              <Row>
                <Col className="text-center">                
                <h1 id="commonName">{props.plantInfo.commonName}</h1>
                <h4 id="latinName">{props.plantInfo.latinName}</h4>
                <h5 id="family">{props.plantInfo.family}</h5>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p id="about">{props.plantInfo.about}</p>
                </Col>
              </Row>

              
            </Col>
            {/* <CloseButton className="fullPageLink" onClick={()=>hidePopup()} aria-label="Hide" /> */}
            <Button className="fullPageLink" onClick={()=>showMsg()} variant="primary"><GoLinkExternal /></Button>
            <div id="fullPageMsg"><p>This is when you would be taken to a full separate page</p></div>
            
        </Row>

        <div onClick={()=>hidePopup()} id="popupBackground" className="popupBackground position-absolute h-100 w-100" ></div>

      </div>
    )



}
