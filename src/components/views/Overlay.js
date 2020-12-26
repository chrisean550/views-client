import React from 'react';

 const Overlay = props => {
    const exitOverlay = () =>{
        document.getElementById("upload-post").style.display="none";
    }

    return (
        <div id="upload-post" className="overlay">
            <div className="close" onClick={exitOverlay}>x</div>
            <div className="upload-form-wrapper">
                {props.form}
            </div>
        </div>
    )
    
}


export default Overlay;