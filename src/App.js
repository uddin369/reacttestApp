import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from './components/InputBox';
import LinkMenu from './components/LinkMenu';
import InputLabel from './components/InputLabel';
import ButtonAction from './components/ButtonAction';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        This is a sample form using React.JS
        </p>
    <LinkMenu />
    <InputLabel />        
		<InputBox />
    <InputLabel />
    <InputBox />
    <ButtonAction/>

		
      </div>
    );
  }
}

export default App;
