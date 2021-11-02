import React from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {  Row, Col } from 'react-bootstrap'

import { BiWorld } from 'react-icons/bi'
import { BsBrightnessHigh, BsDropletFill } from 'react-icons/bs';
import { IoMdTimer } from 'react-icons/io'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { VscSymbolRuler } from 'react-icons/vsc'
import {GiFamilyTree} from 'react-icons/gi'
import { MdOutlineScience } from 'react-icons/md'
export default function GalleryModalContent(props) {
    return (
        <>
                <Col sm={4} md={6} className="popupColumn1 p-0">

                    <GatsbyImage image={getImage((props.plantInfo.image))} alt="" className="w-100" />

                    <div className="d-flex justify-content-evenly">

                    <div sm={6} className="d-flex flex-column">
                        <span title="Scientific Name"><MdOutlineScience /> {props.plantInfo.latinName}</span>
                        <span title="Light Levels"><BsBrightnessHigh /> {props.plantInfo.light}</span>
                        <span title="Water Requirements"><BsDropletFill />{props.plantInfo.water}</span>
                        <span title="Colours"><IoColorPaletteOutline />{props.plantInfo.colour}</span>
                    </div>

                    <div sm={6} className="d-flex flex-column">
                        <span title="Family"><GiFamilyTree /> {props.plantInfo.family}</span>
                        <span title="Maximum Height"><VscSymbolRuler />{props.plantInfo.maxHeight}</span>
                        <span title="Maximum time to full height"><IoMdTimer />{props.plantInfo.maxTimeToGrow}</span>
                        <span title="Native To"><BiWorld />{props.plantInfo.nativeTo}</span>             
                    </div>

                    </div>

                </Col>

                <Col sm={8} md={6} className="popupColumn2 d-flex flex-column align-items-center justify-content-center">

                    <Row>
                        <Col className="text-center">                
                            <h1 id="commonName">{props.plantInfo.commonName}</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col >
                            <p id="about">{props.plantInfo.about}</p>
                        </Col>
                    </Row>

                </Col>

        </>
    )
}
