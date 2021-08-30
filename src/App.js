import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Homepage } from './pages/homepage/homepage.component';
import  ShopPage  from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';
import {Switch,Route,Link} from 'react-router-dom';

const HatsPage = () =>{
  return (
    <div>
      <Link to = "/">Home</Link>
      Hats Page
    </div>
  )
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div >
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path = "/" component = {Homepage}></Route>
          <Route exact path = "/shop" component = {ShopPage}></Route>
          <Route exact path = "/signin" component = {SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
