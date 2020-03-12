import React from 'react';

import FormInput from '../form-input/form-input.unit.js';
/* import CustomButton from '../custom-button/custom-button.component'; */

import './Signin.scss';


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
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
    

          <input type="submit" value="Submit Form"></input>
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