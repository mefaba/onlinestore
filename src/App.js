import React from 'react';
import './App.css';
import HomePage from './pages/Homepage/Homepage.js';
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/Shoppage/Shoppage.js"
import Header from "./components/Header/Header.js"
/* import SignIn from "./components/Signin/Signin.js" */
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.unit.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path = "/" exact component = {HomePage} />
        <Route path = "/shop" exact component = {ShopPage} />
        <Route path = "/signin" exact component = {SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
