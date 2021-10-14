import * as React from "react"
import './index.sass'

import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import leaf from '../images/leaf.png'
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

    <Container fluid>
      <Row >
        <Col lg={10}>
          <div className="section2">
            <h1>Types of Cactus</h1>
            <ul>
              <li>Rows of cactus images</li>
              <li>A number load in straight away</li>
              <li>...more will load as you scroll</li>
              <li>Clicking on these will display a popup, with more information</li>
              <li>animate this popup appearing and disappearing</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row >
        <Col lg={10}>
          <div className="section2">
            <h1>Section 2</h1>
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
