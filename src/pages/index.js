import * as React from "react"
// import { useState, useEffect, useRef } from "react"
// import { getPlants } from "../utils/plants"

import './index.sass'

import { graphql } from "gatsby"

// import { Button, Container,Row, Col, Stack } from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal'
// import MyModal from "../components/modal"
import Header from "../components/header/header"
import Body from "../components/body/body"
import Footer from "../components/footer/footer"

export default class BlogIndex extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        galleryArray:this.props.data.galleryPages.nodes,
        blogPages:this.props.data.blogPages.nodes,
        plantUses:this.props.data.plantUses.nodes
    }
       
}






  componentDidMount(){
    if(typeof window !== 'undefined')this.setState({isBrowser: true})
    if(this.state.isBrowser) window.addEventListener('scroll', ()=>this.scroll);   
  }

  render(){
    const posts = this.state.galleryArray
    const blogPages = this.state.blogPages
    const plantUses = this.state.plantUses
    return (
      <>

        <Header />
        <Body posts={posts} blogPages={blogPages} plantUses={plantUses}/>
        <Footer />    

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

    someEntries: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
        id
      }
    }

    galleryPages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/gallery/"}}) {
      nodes {
        frontmatter {
          about
          colour
          commonName
          family
          image {
            childImageSharp {
              gatsbyImageData
            }
            id
          }
          latinName
          light
          maxHeight
          maxTimeToGrow
          nativeTo
          water
        }
        fileAbsolutePath
      }
    }

    blogPages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blogPages/"}}) {
      nodes {
        frontmatter {
          title
          excerpt
          image {
            childImageSharp {
              gatsbyImageData
            }
            id
          }
        }
        fileAbsolutePath
      }
    }

    plantUses: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/plantUses/"}}) {
      nodes {
        frontmatter {
          title
          excerpt
          image {
            childImageSharp {
              gatsbyImageData
            }
            id
          }
        }
        fileAbsolutePath
      }
    }

  }
`
