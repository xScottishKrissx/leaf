import * as React from 'react'
import './gallery.sass'

import { Row, Col } from 'react-bootstrap'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useState, useEffect } from 'react'

import Modal from '../../modal/modal'

export const Gallery = (props) =>{
  const [plantInfo, setPlantInfo] = useState([])
  const [displayPopup, setPopupStatus] = useState(false)
  const [endSlice, setEndSlice] = useState(3)

  function showPopup(e,info){
    if(displayPopup === true)setPopupStatus(false)
    if(displayPopup === false)setPopupStatus(true)
    setPlantInfo(info)
  }
  
  // This is incrementing the way i want
  useEffect(() => {

    function intersectionCallback(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let targetRow = entry.target.className
          if(targetRow.includes("galleryItemWrapper") && endSlice < props.posts.length){
            setEndSlice(endSlice + 3)
            observer.unobserve(entry.target);
          }         
        } 
        else {}
      });
    }
    
    let options = { threshold: [1] }
    let observer = new IntersectionObserver(intersectionCallback, options)
    let elements = document.querySelectorAll('div')
    for (let elm of elements)observer.observe(elm)
    window.addEventListener("scroll", {passive: true});

    return () => window.removeEventListener("scroll", {passive: true});
  }, [endSlice]);

  console.log(endSlice)
  
  let renderPosts = props.posts.slice(0,endSlice)
  const mapGallery = renderPosts.map(obj => {
      return(
        <Col className="galleryItem" key={obj.frontmatter.image.id} xl={4} md={6} sm={6} onClick={(e)=>showPopup(e,obj.frontmatter)}>
          <div className="d-flex flex-row align-items-center w-100 mt-4">

            <GatsbyImage image={getImage(obj.frontmatter.image)} alt="" />

            <div className="px-3">
              <h3 className="m-0">{obj.frontmatter.commonName}</h3>
              <span className="w-90">{obj.frontmatter.latinName}</span>
            </div>

          </div>
        </Col>
      )
  })
    
return(
    <Row className="my-5">
      
      <Col lg={12}>
        <div>
          <h1 id="test1">Plant Gallery</h1>
          <Row className="galleryItemWrapper" > {mapGallery} </Row>
        </div>
        {endSlice <= (props.posts.length - 3) ? 
          <button className="customButton" onClick={()=>setEndSlice(endSlice + 3)}> Load 3 More</button> 
          : null
        }
        
      </Col>

      {displayPopup === true ?
         <Modal plantInfo={plantInfo} show={true} updateState={setPopupStatus} galleryModal={true}/> 
         :null
      }

    </Row>
)

}

export default Gallery;
{/* <Button variant="outline-secondary">Secondary</Button> */}

