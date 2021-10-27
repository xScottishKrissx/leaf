import React from 'react'

export default function Popup(props) {
    
        <div className="popupWrapper d-flex align-items-center justify-content-center position-fixed h-100 w-100 p-0" id="popup" >
        
        <div className="popupContent d-flex align-items-center w-100" onClick={null}>

            <div className="popupColumn1">
            <h1>{props.title}</h1>
            </div>
            <div className="popupColumn2">
            <h1>Title</h1>
            <h2>Text</h2>
            </div>

        </div>
        <div className="popupBackground position-absolute h-100 w-100" ></div>
        </div>
    
}
