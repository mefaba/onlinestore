import React from 'react';
import { Route, Switch, Redirect  } from "react-router-dom";

import HomePage from './pages/Homepage/Homepage.js';

import ShopPage from "./pages/Shoppage/Shoppage.js";
import CheckoutPage from './pages/checkout/checkout.unit.js';
import Header from "./components/Header/Header.js"
/* import SignIn from "./components/Signin/Signin.js" */
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.unit.js"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js"
import { connect } from "react-redux"
import { setCurrentUser } from './redux/user/user-actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selector';

import './App.css';


class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
              ...snapShot.data()
          })
          /* console.log(this.state); */
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header/>  {/* currentUser = {this.state.currentUser} */}
        <Switch>
          <Route path = "/" exact component = {HomePage} />
          <Route path = "/shop" component = {ShopPage} />
          <Route path = "/checkout" exact component = {CheckoutPage} />
          <Route 
            path = "/signin" 
            exact 
            render = 
              { () => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />) }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


/* const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => {
  return{
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); */
