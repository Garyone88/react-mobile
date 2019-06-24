import React, { Component, Fragment } from "react";
import './styles/App.css';

import Cart from './pages/Cart';
import Home from './pages/Home';
import Mine from './pages/Mine';
import GoodsDetail from './pages/GoodsDetail';
import MyLayout from './components/MyLayout';

import { HashRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render(){
    return (
      <Fragment>
        <Router>
          <Route path="/" exact render={(props)=><MyLayout {...props}><Home /></MyLayout>} />
          <Route path="/Cart" render={(props)=><MyLayout {...props}><Cart /></MyLayout>} />
          <Route path="/Mine" render={(props)=><MyLayout {...props}><Mine /></MyLayout>} />

          <Route path="/GoodsDetail/:id" component={GoodsDetail}/>
        </Router>
      </Fragment>
    )
  }
}


export default App;
