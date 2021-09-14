import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Homepage } from './pages/homepage/homepage.component';
import  ShopPage  from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import {Switch,Route,Link,Redirect} from 'react-router-dom';

const HatsPage = () =>{
  return (
    <div>
      <Link to = "/">Home</Link>
      Hats Page
    </div>
  )
}

class App extends React.Component {
  
  unsubscribeFromAuth = null;
  componentDidMount(){

   const {setCurrentUser} = this.props;
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser:user});
      // console.log(user);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id : snapshot.id,
              ...snapshot.data()
            })
          })
      }
      setCurrentUser(userAuth);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path = "/" component = {Homepage}></Route>
          <Route exact path = "/shop" component = {ShopPage}></Route>
          <Route exact path = "/signin" render = {() => this.props.currentUser ? (<Redirect to = '/' />) : (<SignInAndSignUp />)} ></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) =>({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
