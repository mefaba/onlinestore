import React from 'react';

import FormInput from '../form-input/form-input.unit.js';
import CustomButton from '../custom-button/custom-button.unit.js';
import { signInWithGoogle, auth } from "../../firebase/firebase.utils.js";
import './Signin.scss';


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {email,password} = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' });
    }
    catch(error){console.log(error)};

    
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an accont</h2>
        <span>Sign in with your email and password</span>
      
        <form onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} name="email" label="email" type="email" value={this.state.email} />
        

          <FormInput handleChange={this.handleChange} name="password" label="password" type="password" value={this.state.password} />
          <div className="buttons">
            <CustomButton type="submit" /* value="Submit Form" */> Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> {" "}Sign In With Google {" "} </CustomButton>
            {/*replaced with CustomButton: <input type="submit" value="Submit Form"></input> */}
          </div>
        </form>
      </div>
    )
    }
  }
export default SignIn;

//Aşağıdaki kod üstteki kodun ilk hali.

/* render() {
  return (
    <div className="sign-in">
      <h2>I already have an accont</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="email" type="email" value={this.state.email}></input>
        <label>Email</label>

        <input onChange={this.handleChange} name="password" type="password" value={this.state.password}></input>
        <label>Password</label>

        <input type="submit" value="Submit Form"></input>
      </form>
    </div>
  )
  }
} */