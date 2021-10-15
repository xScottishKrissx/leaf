import * as React from "react"
import './index.sass'

import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import leaf from '../images/leaf.png'
import placeholderPlant from '../images/placeholderPlant.jpg'
import { Button, Container,Row, Col } from 'react-bootstrap';



const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  console.log(posts)
  return (
    <>
    <Container fluid >


      <Row className="header"> 
        <Col >
          <div className="section1">
            <span className="heroImage"></span>
            <div>
              <span>welcome to</span>
              <h1>leaf.com</h1>
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
            <h1>Types of Cactus</h1>
            <Row className="itemWrapper">
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
            </Row>
          </div>
        </Col>

      </Row>

      <Row className="bodySection2">
        <Col lg={12}>
          <div>
            <h1>Body Section 2</h1>
          </div>
        </Col>
      </Row>

    </Container>

    </>
  )
}

export default BlogIndex

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
