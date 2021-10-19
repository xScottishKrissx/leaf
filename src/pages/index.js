import * as React from "react"
import { useState, useEffect, useRef } from "react"

import './index.sass'

import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import leaf from '../images/leaf.png'
import placeholderPlant from '../images/placeholderPlant.jpg'
import { Button, Container,Row, Col } from 'react-bootstrap';

export default class BlogIndex extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        counter:0,
      galleryArray:this.props.data.allMarkdownRemark.nodes
    }
    window.addEventListener('scroll', this.scroll);      
}

  showPopup(id){
    console.log("Show Popup " + id)
    document.getElementById("popup").classList.add("showWrapper")
  }
  hidePopup(){
    console.log("Hide Popup")
    document.getElementById("popup").classList.remove("showWrapper")
  }

  scroll = (e) =>{
      const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);

      const windowBottom = windowHeight + window.pageYOffset;
      if(windowBottom >= docHeight ){
          this.setState({
              counter:this.state.counter + 1
          })
          return;
      }
  }
  


  render(){
    console.log(this.state.counter)
    const siteTitle = this.props.data.site.siteMetadata?.title || `Title`
    const posts = this.state.galleryArray.slice(0, this.state.counter)
    console.log(posts)

    const mapGallery = posts.map(obj => {
      return(

      
      <Col md={3} sm={6} onClick={()=>this.showPopup(1)}>
        <img src={placeholderPlant} />
        <h3>Title:{obj.frontmatter.title}</h3>
        <span>laternus nameinus</span>
      </Col>
      )
    })

    return (
      <>
      <Container fluid >
  
  
        <Row className="header"> 
          <Col >
            <div className="section1">
              <span className="heroImage"></span>
              <div>
                <span>welcome to</span>
                <h1>leaf.com </h1>
                <button >Increase Hook State thing</button>
                <img src={leaf} />
              </div>
  
            </div>
          </Col>
        </Row>
  
  
  
      </Container>
  
      <Container className="bodyContent" fluid="lg">
        <Row className="bodySection1">
  
          <Col lg={12}>
            <div>
              <h1>Plant Gallery</h1>

              <Row className="itemWrapper" >
                <span>MapGallery</span>
                {mapGallery}
                <Col md={3} sm={6} onClick={()=>this.showPopup(1)}>
                  <img src={placeholderPlant} />
                  <h3>Title</h3>
                  <span>laternus nameinus</span>
                </Col>
  
                <Col md={3} sm={6} onClick={()=>this.showPopup(2)}>
                  <img src={placeholderPlant} />
                  <h3>Title</h3>
                  <span>laternus nameinus</span>
                </Col>
  
                <Col md={3} sm={6} onClick={()=>this.showPopup(3)}>
                  <img src={placeholderPlant} />
                  <h3>Title</h3>
                  <span>laternus nameinus</span>
                </Col>
  
                <Col md={3} sm={6}>
                  <img src={placeholderPlant} />
                  <h3>Title</h3>
                  <span>laternus nameinus</span>
                </Col>
  
                <Col md={3} sm={6}>
                  <img src={placeholderPlant} />
                  <h3>Title</h3>
                  <span>laternus nameinus</span>
                </Col>
  
                <Col md={3} sm={6}>
                  <img src={placeholderPlant} />
                  <h3>Title</h3>
                  <span>laternus nameinus</span>
                </Col>
  
                <Col md={3} sm={6}>
                  <img src={placeholderPlant} />
                  <h3>Title</h3>
                  <span>laternus nameinus</span>
                </Col>
  
                <Col md={3} sm={6} >
                  <img src={placeholderPlant} />
                  <h3>Title</h3>
                  <span>laternus nameinus</span>
                </Col>
              </Row>
            </div>
          </Col>
  
          <div className="popupWrapper" id="popup" >
            
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
  
        </Row>
  
        <Row className="bodySection2">

          <Col lg={12}>
            <h1>Section Header</h1>
              <Row className="sectionContentWrapper">
                <Col>
                  <img src={placeholderPlant} />
                  <p>Descriptive Text</p>
                </Col>

                <Col>
                  <img src={placeholderPlant} />
                  <p>Descriptive Text</p>
                </Col>

                <Col>
                  <img src={placeholderPlant} />
                  <p>Descriptive Text</p>
                </Col>
              </Row>
          </Col>
        </Row>
  
      </Container>
  
      </>
    )
  }

}

// const BlogIndex = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata?.title || `Title`
//   const posts = data.allMarkdownRemark.nodes
//   console.log(posts)


//   function showPopup(id){
//     console.log("Show Popup " + id)
//     document.getElementById("popup").classList.add("showWrapper")
//   }
//   function hidePopup(){
//     console.log("Hide Popup")
//     document.getElementById("popup").classList.remove("showWrapper")
//   }

//   useEffect(()=>{



    
//     function intersectionCallback(entries) {

//       entries.forEach(function(entry) {
//         if (entry.isIntersecting) {
//           let targetRow = entry.target.className
//           if(targetRow.includes( "itemWrapper")){
//             // console.log(targetRow)
//             // console.log("Load More articles")
//           }
//         }else{}
//       });
  
//     }   
    
//     let options = { threshold: [0.1] }
//     let observer = new IntersectionObserver(intersectionCallback, options)
//     let elements = document.querySelectorAll('div')

//     let elm
//     for (elm of elements){ 
//       observer.observe(elm) 
      
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;  
//       // if(currentScrollY < 200) document.getElementById("navBarProductsLink").classList.remove('navChangeTemp')


//       const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
//       const body = document.body;
//       const html = document.documentElement;
//       const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
  
//       const windowBottom = windowHeight + window.pageYOffset + 100;
//       if(windowBottom >= docHeight){
//         console.log("Load Articles")
//         return;
//       }
//       // console.log(currentScrollY)
//     };












// }, [])



  
//   return (
//     <>
//     <Container fluid >


//       <Row className="header"> 
//         <Col >
//           <div className="section1">
//             <span className="heroImage"></span>
//             <div>
//               <span>welcome to</span>
//               <h1>leaf.com </h1>
//               <button >Increase Hook State thing</button>
//               <img src={leaf} />
//             </div>

//           </div>
//         </Col>
//       </Row>



//     </Container>

//     <Container className="bodyContent" fluid="lg" >
//       <Row className="bodySection1">

//         <Col lg={12}>
//           <div>
//             <h1>Plant Gallery</h1>
//             <Row className="itemWrapper">
//               <Col md={3} sm={6} onClick={()=>showPopup(1)}>
//                 <img src={placeholderPlant} />
//                 <h3>Title</h3>
//                 <span>laternus nameinus</span>
//               </Col>

//               <Col md={3} sm={6} onClick={()=>showPopup(2)}>
//                 <img src={placeholderPlant} />
//                 <h3>Title</h3>
//                 <span>laternus nameinus</span>
//               </Col>

//               <Col md={3} sm={6} onClick={()=>showPopup(3)}>
//                 <img src={placeholderPlant} />
//                 <h3>Title</h3>
//                 <span>laternus nameinus</span>
//               </Col>

//               <Col md={3} sm={6}>
//                 <img src={placeholderPlant} />
//                 <h3>Title</h3>
//                 <span>laternus nameinus</span>
//               </Col>

//               <Col md={3} sm={6}>
//                 <img src={placeholderPlant} />
//                 <h3>Title</h3>
//                 <span>laternus nameinus</span>
//               </Col>

//               <Col md={3} sm={6}>
//                 <img src={placeholderPlant} />
//                 <h3>Title</h3>
//                 <span>laternus nameinus</span>
//               </Col>

//               <Col md={3} sm={6}>
//                 <img src={placeholderPlant} />
//                 <h3>Title</h3>
//                 <span>laternus nameinus</span>
//               </Col>

//               <Col md={3} sm={6} >
//                 <img src={placeholderPlant} />
//                 <h3>Title</h3>
//                 <span>laternus nameinus</span>
//               </Col>
//             </Row>
//           </div>
//         </Col>

//         <div className="popupWrapper" id="popup" >
          
//           <div className="popupContent" onClick={null}>

//             <div className="popupColumn1">
//               <h1>Image</h1>
//             </div>
//             <div className="popupColumn2">
//               <h1>Title</h1>
//               <h2>Text</h2>
//             </div>

//           </div>
//           <div onClick={()=>hidePopup()} className="popupBackground" ></div>
//         </div>

//       </Row>

//       <Row className="bodySection2">
//         <Col lg={12}>
//           <div>
//             <h1>Body Section 2</h1>
//           </div>
//         </Col>
//       </Row>

//     </Container>

//     </>
//   )
// }

// export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
