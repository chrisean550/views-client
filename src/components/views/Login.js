import React from 'react'
import {Link} from 'react-router-dom'
import LoginForm from '../forms/LoginForm'
const Login = () => {
    return (
        <div className="log-in">
            <h1 className="gradient-text">Welcome back!</h1>
            <p className="gradient-text">Enter your login info below</p>
            <LoginForm/>
            <p className="gradient-text">Don't have an account?</p>
            <Link  className="gradient-text link" to="/signup">Create Account</Link>
        </div>
    )
}

export default Login
