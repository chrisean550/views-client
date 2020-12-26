import React, { Component } from 'react'
import axios from 'axios'

// const db = 'http://localhost:3000/users'
const db = 'https://views-server.herokuapp.com/users'
class LoginForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             pwd: ''
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
        e.preventDefault()
        let {username, pwd} = this.state
        axios.get(`${db}/findByUsername/${username}`)
            .then(res =>{
                let acct = res.data
                console.log(res)
                if(acct.password === pwd){
                    document.location.pathname = `main/${acct._id.toString()}`
                }
                else{
                    alert("This password does not match our records")
                }
            })
            .catch(err => {
                console.log(`Error: ${err}`)
                alert("Failed to find an account with this username")
            })

    }
    
    render() {
        return (
            <form id="login-form" className="form" onSubmit={this.handleSubmit}>
                <input type="text"  placeholder="Username" value={this.state.username} onChange={this.handleChange} name="username"/><br/>
                <input type="password"  placeholder="Password" value={this.state.pwd} onChange={this.handleChange} name="pwd"/><br/> 
                <input className="gradient-text" type="submit" value="Login"/>
            </form>
        )
    }
}

export default LoginForm