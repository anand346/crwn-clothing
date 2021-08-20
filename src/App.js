import logo from './logo.svg';
import './App.css';
import { Homepage } from './pages/homepage/homepage.component';
import  ShopPage  from './pages/shop/shop.component';
import {Switch,Route,Link} from 'react-router-dom';

const HatsPage = () =>{
  return (
    <div>
      <Link to = "/">Home</Link>
      Hats Page
    </div>
  )
}

function App() {
  return (
    <div >
      <Switch>
        <Route exact path = "/" component = {Homepage}></Route>
        <Route exact path = "/shop" component = {ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
