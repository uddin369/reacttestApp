import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InputBox from './components/InputBox';
//import LinkMenu from './components/LinkMenu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
