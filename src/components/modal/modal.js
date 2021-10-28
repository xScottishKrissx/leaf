import React from 'react'

import { useState } from 'react'
import {  Button, Row, CloseButton } from 'react-bootstrap'

import {GoLinkExternal} from 'react-icons/go'

import GalleryModalContent from '../body/gallery/galleryModalContent'
import BlogGalleryModalContent from '../body/blogGallery/blogGalleryModalContent'

export default function Modal(props) {

    function showMsg(){
        // This needs to be replaced with something else
        document.getElementById("fullPageMsg").classList.add("showMsg")
      }

    const DisplayPopup = () => {
        const [displayPopup, setPopupStatus] = useState(props.show)

        function handleClick(){
            if(displayPopup === true){
                setPopupStatus(false)
                props.updateState(false)
            }

            if(displayPopup === false){
                setPopupStatus(true)
                props.updateState(true)
            }
            
        }


        let togglePopup = displayPopup === true ? " showWrapper" : " hideWrapper"

        return (
                <div 
                    className={"popupWrapper d-flex align-items-center justify-content-center position-fixed h-100 w-100 p-0" + togglePopup} 
                    id="popup" 
                >

                    <Row className="popupContent d-flex w-100" onClick={null}>

                        <CloseButton id="closePopupBtn" onClick={handleClick} aria-label="Hide" className="bottom-sm-0 left-sm-0"  />

                        {props.galleryModal ? <GalleryModalContent plantInfo={props.plantInfo}/> : null}
                        {props.blogGalleryModal ? <BlogGalleryModalContent blogInfo={props.blogInfo} /> : null}

                        <Button 
                            className="fullPageLink" 
                            onClick={()=>showMsg()} 
                            variant="primary">
                                <GoLinkExternal />
                        </Button>
                        
                        <div id="fullPageMsg">
                            <p>This is when you would be taken to a full separate page</p>
                        </div>

                    </Row>

                    <div onClick={handleClick} id="popupBackground" className="popupBackground position-absolute h-100 w-100" ></div>
        
                </div>
        )
    }

    return <DisplayPopup /> ;



}
