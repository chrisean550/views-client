import React, { Component } from 'react'
import axios from 'axios'

// const db = 'http://localhost:3000/posts'
const db = 'https://views-server.herokuapp.com/posts'
class UploadForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             url: '',
             description: ''
        }
        this.handleChange.bind(this)
        this.handleSubmit.bind(this)
    }
    
    handleChange = e =>{
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        let post = {
            url: this.state.url,
            description: this.state.description,
        }
        axios.post(db, post)
        .then(response =>{
            this.exitOverlay()
            alert("Post Uploaded Successfully");
        })
        .catch(error => {
            this.exitOverlay();
            console.log(error);
            alert("Post failed to be uploaded")
        })
    }

    exitOverlay = () =>{
        document.getElementById("upload-post").style.display="none";
    }

    render() {
        return (
            <form id="upload-form" className="form" onSubmit={this.handleSubmit}>
                <input type="text"  placeholder="url" value={this.state.url} onChange={this.handleChange} name='url'/><br/>
                <textarea placeholder="description" value={this.state.des} onChange={this.handleChange} name='description'/><br/> 
                <input className="gradient-text" type="submit" value="Submit"/>
            </form>
        )
    }
}

export default UploadForm