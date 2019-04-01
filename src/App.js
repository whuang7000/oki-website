import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './Components/HomePage';
import AboutText from './Components/AboutText';
import "./index.css"

class App extends Component {
  render() {
    return (
      <HomePage/>
    )
  }
}
export default App;
