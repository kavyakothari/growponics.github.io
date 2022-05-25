// The main JavaScript file where the routes are created for the application

// When the user signs in with Google SignIn, the App.js createUserProfileDocument(userAuth) function checks to see if the Google login is available
// in the firestore user collections. If not, a copy of the account with the required fields will be created. The user login information is 
// retrieved from the firestore users collections and passed in the userRef in App.js.

import React from 'react';

import { Switch,Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import './App.css';
import { setCurrentUser } from "./redux/user/user.actions";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from "./pages/checkout/checkout.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { selectCurrentUser } from "./redux/user/user.selector";

// Components are like functions that return HTML elements
// Using extends for the component to access React.Component()
class App extends React.Component{
  // // The initial state is basically a null 
  unsubscribefromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    
// Creating a User Profile Document method from firebase
    this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribefromAuth();
  }

  // Function to render some UI when its path matches the current URL
  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route 
            path="/signin" 
            render={() => 
              this.props.currentUser ? (
                <Redirect to="/" />
                ) : (
                <SignInAndSignUpPage/>
                ) 
              } 
          />
        </Switch>
      </div>
    );
  }
}

// createStructuredSelector is a utility function for a common pattern that occurs when using Reselect
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

// The mapDispatchToProps function will be called with dispatch as first argument 
// The code calls this.props.setCurrentUser
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App);
