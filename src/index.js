import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './css/custom.css';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>
  , document.getElementById('root'));

registerServiceWorker();
