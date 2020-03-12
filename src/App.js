import React from 'react';
import './App.css';
import HomePage from './pages/Homepage/Homepage.js';
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/Shoppage/Shoppage.js"
import Header from "./components/Header/Header.js"
/* import SignIn from "./components/Signin/Signin.js" */
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.unit.js"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          /* console.log(this.state); */
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route path = "/" exact component = {HomePage} />
          <Route path = "/shop" exact component = {ShopPage} />
          <Route path = "/signin" exact component = {SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
