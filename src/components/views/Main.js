import React, { Component } from 'react'
import axios from 'axios'

import HeaderBar from '../HeaderBar'
import ToolBar from '../ToolBar'
import Content from '../Content'
import Overlay from './Overlay'

const users = 'http://localhost:3000/users'
const post_data = 'http://localhost:3000/posts'

// const users = 'https://views-server.herokuapp.com/users'
// const post_data = 'https://views-server.herokuapp.com/posts'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            profile:[],
            posts:[],
            overlay_form:[]
        }
        this.handleOvelayFormChange.bind(this)
    }

    componentDidMount(){
        axios.get(users+"/findByID/"+this.state.id)
        .then(response=>{
            this.setState({
                profile: response.data
            })
            
        })
        .catch(err =>{
            console.log(err)
        })

        axios.get(post_data+"/")
        .then(response=>{
            this.setState({
                posts: response.data
            })
        })  
    }

    handleOvelayFormChange = (form) =>
    {
        this.setState({
            overlay_form: form
        })

    }

    
    render() {
        let {profile, posts, overlay_form} = this.state
        return (
            <React.Fragment>
                <HeaderBar profile={profile} onFormChange={this.handleOvelayFormChange}/>
                <Content posts={posts}/>
                <ToolBar onFormChange={this.handleOvelayFormChange}/>
                <Overlay form={overlay_form}/>
            </React.Fragment>
        )
    }
}

export default Main;