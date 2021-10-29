import React from 'react'

export default function PlantUsesModalContent(props) {
    return (
        <div>
            <h1>{props.plantUsesInfo.title}</h1>
            <p>{props.plantUsesInfo.excerpt}</p>
        </div>
    )
}
