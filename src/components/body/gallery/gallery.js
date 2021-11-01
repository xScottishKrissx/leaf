import * as React from 'react'
import './gallery.sass'

import { Row, Col } from 'react-bootstrap'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useState, useEffect, useRef } from 'react'

import Modal from '../../modal/modal'

export const Gallery = (props) =>{
  const [plantInfo, setPlantInfo] = useState([])
  const [displayPopup, setPopupStatus] = useState(false)
  const [posts, setPosts] = useState(props.posts)
  const [endSlice, setEndSlice] = useState(6)

  const [count, setCount] = useState(0);
  const ref = useRef();

  const [state, setState] = useState({
    scrolled: false,
    visible: false,
  });

  function showPopup(e,info){
    if(displayPopup === true)setPopupStatus(false)
    if(displayPopup === false)setPopupStatus(true)
    setPlantInfo(info)
  }



  const [scrollTop, setScrollTop] = useState(0);
  


  // This is incrementing the way i want
  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition > scrollTop) {       
        setEndSlice(endSlice + 1)
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [endSlice]);



  console.log(endSlice)




  

  const mapGallery = props.posts.map(obj => {
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
          <h1>Plant Gallery</h1>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}> Click me </button>
          <Row className="galleryItemWrapper" ref={ref}> {mapGallery} </Row>
        </div>
      </Col>

      {displayPopup === true ?
         <Modal plantInfo={plantInfo} show={true} updateState={setPopupStatus} galleryModal={true}/> 
         :null
      }

    </Row>
)

}

export default Gallery;


