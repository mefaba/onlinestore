import React from 'react';
import SignIn from "../../components/Signin/Signin.js"
import SignUp from '../../components/Signup/Signup.unit.js';
import "./signin-and-signup.unit.scss"

const SignInAndSignUpPage = () => {
    return(
    <div className="sign-in-and-sign-up" >
        <SignIn />
        <SignUp />
    </div>
    )
}

export default SignInAndSignUpPage