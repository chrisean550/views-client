import React from 'react'
import {Link} from 'react-router-dom'
import SignupForm from '../forms/SignupForm'

const Signup = () =>{
    return (
        <div className="sign-up">
            <h1 className="gradient-text">Welcome to Views!</h1>
            <p className="gradient-text">Fill in information below to create an account</p>
            <SignupForm/>
            <p className="gradient-text">Already have an account?</p>
            <Link className="gradient-text link" to="/login">Login</Link>
        </div>
    )
}

export default Signup