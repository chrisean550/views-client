import React from 'react'
import EditAccountForm from './forms/EditAccountForm';

const HeaderBar = props =>{
    const addPost = () =>{
        props.onFormChange(<EditAccountForm profile={props.profile}/>)
        document.getElementById("upload-post").style.display = "block";
    }
    return (
        <div className="header-wrapper">
            <div className="header gradient-text">
                <h3 className="header-logo">Views</h3>
                <div className="header-acct">
                    <i className="material-icons edit-account-button" onClick={addPost}>&#xe853;</i>
                    <p>{props.profile.username}</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar