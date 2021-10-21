import * as React from 'react'

import './body.sass'

import { Container } from 'react-bootstrap'

import Gallery from './gallery/gallery'
import Uses from './uses/uses'
import Bio from './bio/bio'
import BlogGallery from './blogGallery/blogGallery'

export const Body = (props) => {



    return (

        <div>
            <Container className="bodyContent" fluid="lg">
                <Gallery posts={props.posts}/>
                <Bio />
                <Uses />
                <BlogGallery />  
            </Container>
        </div>
    )
}

export default Body