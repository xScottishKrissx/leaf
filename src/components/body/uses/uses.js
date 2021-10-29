import * as React from 'react'

import './uses.sass'

import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Modal from '../../modal/modal'

import placeholderPlant from '../../../images/placeholderPlant.jpg'

export const Uses = (props) =>{
  const [plantUsesInfo, setPlantUsesInfo] = useState([])
  const [displayPopup, setPopupStatus] = useState(false)

  function showPopup(e,info){
    if(displayPopup === true)setPopupStatus(false)
    if(displayPopup === false)setPopupStatus(true)
    setPlantUsesInfo(info)
  }

 const upperRow = props.plantUses[0].frontmatter
 console.log(upperRow)
 const lowerRow = props.plantUses[1].frontmatter
    
return(
    <Row className="bodySection3 my-5">

    <Col lg={12}>
      <h1>Plant Uses</h1>
        <Row className="usesRow flex-row-reverse m-0 mb-3 upper">

          <Col id="forcePaddingRight" md={6} >
            <GatsbyImage image={getImage(upperRow.image)} alt="" />
          </Col>

          <Col md={6} className="d-flex justify-content-center align-items-center">
            <div className="p-5">
              <h2>{upperRow.title}</h2>
              <p>{upperRow.excerpt}</p>
              <Button variant="success" onClick={(e)=>showPopup(e,upperRow)}>Read More</Button>
            </div>
          </Col>
        

        </Row>

        <Row className="usesRow m-0 lower">
          <Col id="forcePaddingLeft" md={6} >
            <GatsbyImage image={getImage(lowerRow.image)} alt="" />
          </Col>
  
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <div className="p-5">
            <h2>{lowerRow.title}</h2>
              <p>{lowerRow.excerpt}</p>
              <Button variant="success" onClick={(e)=>showPopup(e,lowerRow)}>Read More</Button>
            </div>
          </Col>

        </Row>
    </Col>

    {displayPopup === true ?
         <Modal plantUsesInfo={plantUsesInfo} show={true} updateState={setPopupStatus} plantUsesModal={true}/> 
         :null
      }
  </Row>
)

}

export default Uses;