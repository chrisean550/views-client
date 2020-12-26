import React from 'react'
import UploadForm from './forms/UploadForm';

export default function ToolBar( props) {
    const addPost = () =>{
        props.onFormChange(<UploadForm/>)
        document.getElementById("upload-post").style.display = "block";
    }
    return (
        <div className="toolbar-wrapper">
            <div className="toolbar">
                <i className="material-icons gradient-text" onClick={addPost} >&#xe148;</i>    
            </div>
        </div>
    )
}
