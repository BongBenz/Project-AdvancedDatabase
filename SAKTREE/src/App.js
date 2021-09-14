import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Category from './pages/Category';
import Home from './pages/Home';
import Detail from './pages/Detail';
import CheckOut from './pages/CheckOut';
import Confirm from './pages/Confirm';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Treacking from './pages/Treacking';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>
        <Header />

        <Switch>
          
          <Route path="/track">
              <Treacking />
            </Route>
          <Route path="/regis">
              <Register />
            </Route>
          <Route path="/login">
              <Login />
            </Route>
          <Route path="/cart">
              <Cart />
            </Route>
          <Route path="/confirm">
              <Confirm />
            </Route>
          <Route path="/checkout">
              <CheckOut />
            </Route>
          <Route path="/detail">
              <Detail />
            </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;
