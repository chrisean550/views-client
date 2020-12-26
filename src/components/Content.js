import React from 'react'
import Post from './Post'

export default function Content(props) {
    return (
        <div className="content-wrapper">
        <div className="content">
            {props.posts.map((post, index)=><Post key={index} data={post}/>)}
        </div>
    </div>
    )
}
