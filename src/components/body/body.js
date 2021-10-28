import * as React from 'react'

import './body.sass'

import { Container } from 'react-bootstrap'

import Gallery from './gallery/gallery'
import Uses from './uses/uses'
import Bio from './bio/bio'
import BlogGallery from './blogGallery/blogGallery'

export const Body = (props) => {

console.log(props.blogPages)

    return (

        <div>
            <Container className="bodyContent" fluid="lg">
                <Bio />
                <Uses />
                <BlogGallery blogPages={props.blogPages}/> 
                <Gallery posts={props.posts}/> 
            </Container>
        </div>
    )
}

export default Body