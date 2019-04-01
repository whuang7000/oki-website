import React, { Component } from 'react';
import HomeText from './HomeText.jsx';
import AboutText from './AboutText.jsx';
import ContactText from './ContactText.jsx';

class HeaderText extends Component {

  state = {
    display: 'home'
  }

  handleClick = (event) => {
    this.setState({ display: event.target.name });
  }


  render() {
    var displayText;
    switch(this.state.display) {
      case 'home': displayText = <HomeText/>;
      break;
      case 'about': displayText = <AboutText/>;
      break;
      case 'contact': displayText = <ContactText/>;
      break;
      default: displayText = <HomeText/>;
    }
    return (
      <container>
        <div className='header'>
          <div className='iconDiv'>
            <button onClick={this.handleClick} name='home'className='iconButton'/>
          </div>
          <div about className='aboutButton'>
            <a href="javascript:;" onClick={this.handleClick} name='about' className='a2'>About</a>
          </div>
          <div contact className='contactButton'>
            <a href="javascript:;" onClick={this.handleClick} name='contact' className='a2'>Contact</a>
          </div>
        </div>
        <div className='headerDivider'/>
        {displayText}
      </container>
    )
  }
}

export default HeaderText;
