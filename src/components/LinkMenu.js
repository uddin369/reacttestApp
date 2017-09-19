import React, { Component } from 'react';
import logo from '../logo.svg';

class LinkMenu extends Component {
  render() {
    return (
      <div className="Input-box">
        <a href={logo}> Menu One</a>
      </div>
    );
  }
}

export default LinkMenu;