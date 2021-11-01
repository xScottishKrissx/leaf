import * as React from "react"

import './index.sass'

import { graphql } from "gatsby"

import Header from "../components/header/header"
import Body from "../components/body/body"
import Footer from "../components/footer/footer"

export default class BlogIndex extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        galleryArray:this.props.data.galleryPages.nodes,
        blogPages:this.props.data.blogPages.nodes,
        plantUses:this.props.data.plantUses.nodes,
        bio:this.props.data.bio.nodes
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
    const bio = this.state.bio
    return (
      <>

        <Header />
        <Body posts={posts} blogPages={blogPages} plantUses={plantUses} bio={bio}/>
        <Footer />    

      </>
    )
  }

}

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
          modalText
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
          modalDescription
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

    bio: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/bio/"}}) {
      nodes {
        frontmatter {
          title
          excerpt
          description
          image {
            childImageSharp {
              gatsbyImageData
            }
            id
          }
          modalImage {
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
