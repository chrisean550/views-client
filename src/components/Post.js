import React from 'react'

function Post(props) {
    return(
        <div className="post">
            <img className="post-img" src={props.data.url} alt="post"/>
            <p className="post-description">{props.data.description}</p>
            {/* <p className="post-user">By: {props.data.username}</p> */}
        </div>
    )
}

export default Post;