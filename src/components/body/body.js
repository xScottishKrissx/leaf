import * as React from 'react'
import Bio from './bio/bio'
import BlogGallery from './blogGallery/blogGallery'

import './body.sass'
import Gallery from './gallery/gallery'
import Uses from './uses/uses'

export const Body = (props) => {
    return (
        <div>
            <h1>Body</h1>
            <Gallery />
            <Bio />
            <Uses />
            <BlogGallery />
        </div>
    )
}

export default Body