import React, { Component } from 'react'
import axios from 'axios'

const db = 'http://localhost:3000/users'
// const db = 'https://views-server.herokuapp.com/users'
class SignupForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             email: '',
             fname: '',
             lname: '',
             pwd: '',
             vpwd: ''
        }
        this.handleChange.bind(this)
        this.handleSubmit.bind(this)
    }

    handleChange = e =>{
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })

    }

    handleSubmit = e =>{
        e.preventDefault()
        if(this.validPassword()){
            let user = {
                username: this.state.username,
                email: this.state.email,
                first_name: this.state.fname,
                last_name: this.state.lname,
                password: this.state.pwd
            }
            axios.post(db, user)
                .then(res =>{
                    alert("Account successfully created")
                    document.location.pathname = '/login'
                })
                .catch(err => {
                    alert("Failed to create account")
                    console.log(`Error: ${err}`)
                })
        }
    }

    validPassword = () =>{
        let {pwd, vpwd} = this.state 
        if (pwd === vpwd){
            return true
        }
        else{
            alert("Passwords do not match")
            return false
        }
    }

    render() {
        return (
            <form id="signup-form" className="form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} name="username"/><br/>
                <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleChange} name="email"/><br/>
                <input type="text" placeholder="First Name" value={this.state.fname} onChange={this.handleChange} name="fname"/><br/>
                <input type="text" placeholder="Last Name" value={this.state.lname} onChange={this.handleChange} name="lname"/><br/>
                <input type="password" placeholder="Password" value={this.state.pwd} onChange={this.handleChange} name="pwd"/><br/>
                <input type="password" placeholder="Verify Password" value={this.state.vpwd} onChange={this.handleChange} name="vpwd"/><br/> 
                <input className="gradient-text" type="submit" value="Create Account"/>
            </form>
        )
    }
}

export default SignupForm