import * as React from "react"
import { useState, useEffect, useRef } from "react"

import './index.sass'

import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import leaf from '../images/leaf.png'

import placeholderPlant from '../images/placeholderPlant.jpg'
import who1 from '../images/who_1.png'
import who2 from '../images/who_2.png'
import who3 from '../images/who_3.png'

import { Button, Container,Row, Col, Stack } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import MyModal from "../components/modal"
import Header from "../components/header/header"
import Body from "../components/body/body"
import Footer from "../components/footer/footer"

export default class BlogIndex extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        counter:0,
      galleryArray:this.props.data.allMarkdownRemark.nodes
    }
    window.addEventListener('scroll', this.scroll);      
}

  showPopup(title,body){
    // console.log("Show Popup " + id)
    // document.getElementById("popup").classList.add("showWrapper")
  }
  hidePopup(){
    // console.log("Hide Popup")
    // document.getElementById("popup").classList.remove("showWrapper")
  }

  // scroll = (e) =>{
  //     const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
  //     const body = document.body;
  //     const html = document.documentElement;
  //     const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);

  //     const windowBottom = windowHeight + window.pageYOffset;
  //     if(windowBottom >= docHeight ){
  //         this.setState({
  //             counter:this.state.counter + 1
  //         })
  //         return;
  //     }
  // }






  render(){


    console.log(this.state.counter)
    const siteTitle = this.props.data.site.siteMetadata?.title || `Title`
    const posts = this.state.galleryArray
    console.log(posts)

    const mapGallery = posts.map(obj => {
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

    return (
      <>
      <Header />
      <Body />
      <Footer />
      
      <Container fluid >
  
  
        <Row className="header"> 
          <Col >
            <div className="section1">
              <span className="heroImage"></span>
              <div>
                <span>welcome to</span>
                <h1>leaf.com </h1>
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
  
        <Row className="bodySection2">

          <Col lg={12}>
            <h1>Who are Leaf.com?</h1>
              <Row className="sectionContentWrapper m-0">
                <Col>
                  <img src={who1} />
                  <p>Database</p>
                </Col>

                <Col>
                  <img src={who2} />
                  <p>Preservation</p>
                </Col>

                <Col>
                  <img src={who3} />
                  <p>Knowledge</p>
                </Col>
              </Row>
          </Col>
        </Row>


        <Row className="bodySection3">

          <Col lg={12}>
            <h1>Plant Uses</h1>
              <Row className="sectionContentWrapper upper m-0 mb-3 ">

                <Col id="forcePaddingRight" md={6} className="d-flex justify-content-center justify-content-md-end">
                  <img src={placeholderPlant} />
                </Col>

                <Col md={6} className="d-flex justify-content-center align-items-center">
                  <div className="p-5">
                    <h2>Edible</h2>
                    <p>Plants bring homes to life, and they also bring life to your office. Adding plants into your space also helps to create a relaxing environment.</p>
                    <p>Plants bring homes to life, and they also bring life to your office. Adding plants into your space also helps to create a relaxing environment.</p>
                    <Button variant="success">Success</Button>
                  </div>
                </Col>
              

              </Row>

              <Row className="sectionContentWrapper m-0 lower">
                <Col id="forcePaddingLeft" md={6} className="d-flex justify-content-center justify-content-md-start">
                  <img src={placeholderPlant} />
                </Col>
        
                <Col md={6} className="d-flex justify-content-center align-items-center">
                  <div className="p-5">
                    <h2>Medicinal</h2>
                    <p>We've gathered some of our most popular plants into sets to suit all types of plant parent, including those who need a bit of extra inspiration.</p>
                    <p>Find your match</p>
                    <Button variant="success">Success</Button>
                  </div>
                </Col>

              </Row>
          </Col>

        </Row>

        <Row className="bodySection4">

          <Col lg={12}>
            <h1>Blog Pages</h1>
              <Row className="sectionContentWrapper">
                <Col sm={6} lg={3}>
                  <div className="pb-3">
                    <img src={placeholderPlant} />
                    <p>Blog Title</p>
                    <p>Blog Copy</p>
                  </div>
                </Col>

                <Col sm={6} lg={3}>
                  <div>
                    <img src={placeholderPlant} />
                    <p>Blog Title</p>
                    <p>Blog Copy</p>
                  </div>
                </Col>

                <Col sm={6} lg={3}>
                  <div>
                    <img src={placeholderPlant} />
                    <p>Blog Title</p>
                    <p>Blog Copy</p>
                  </div>
                </Col>

                <Col sm={6} lg={3}>
                  <div>
                    <img src={placeholderPlant} />
                    <p>Blog Title</p>
                    <p>Blog Copy</p>
                  </div>
                </Col>
              </Row>
          </Col>

          </Row>
  
      </Container>

      <Container fluid="lg" className="footer">
  
        <Row className="justify-content-lg-center">
          <Col lg="12">
               <div>
                <img src={leaf} />
               </div>
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
