import React from 'react'

export default function BlogGalleryModalContent(props) {
    return (
        <div>
            <h1>{props.blogInfo.title}</h1>
            <p>{props.blogInfo.excerpt}</p>
            
        </div>
    )
}
