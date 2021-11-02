import * as React from 'react'
import { useState, useEffect } from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './bio.sass'

import { Row, Col} from 'react-bootstrap'
import Modal from '../../modal/modal'

export const Bio = (props) =>{
  const [bioInfo, setBioInfo] = useState([])
  const [displayPopup, setPopupStatus] = useState(false)
  const [addClass, setClass] = useState()

  function showPopup(e,info){
    if(displayPopup === true)setPopupStatus(false)
    if(displayPopup === false)setPopupStatus(true)
    setBioInfo(info)
  }

  // console.log(props.bio)
  const mapBio = props.bio.map(x =>{ 
    return (
      <Col key={x.frontmatter.image.id} className="d-flex flex-column align-items-center" onClick={(e)=>showPopup(e, x.frontmatter)}>
        <GatsbyImage image={getImage(x.frontmatter.image)} alt="" />
        <h3>{x.frontmatter.title}</h3>
    </Col>
    )
  })


return(
    <Row className="my-5">
      <Col lg={12}>
        <h1>Who are Leaf.com?</h1>
        <Row className="bioItemWrapper m-0"  > {mapBio} </Row>
      </Col>

      {displayPopup === true ?
         <Modal bioInfo={bioInfo} show={true} updateState={setPopupStatus} bioModal={true}/> 
         :null
      }
  </Row>
)

}

export default Bio;