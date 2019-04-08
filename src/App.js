import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Link} from 'react-router-dom';
//import { BrowserRouter } from 'react-router';
import HomePage from './Components/HomePage';
import AboutText from './Components/AboutText';
import "./index.css"

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={HomePage}/>
      </BrowserRouter>
    )
  }
}
export default App;
