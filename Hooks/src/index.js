// Core dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Application dependencies
import './index.css';
import App from './App';

// Progressive Web App support
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />, document.getElementById('root'));

registerServiceWorker();
