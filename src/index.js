import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './components';
import registerServiceWorker from './registerServiceWorker';
import './styles.js';

WebFont.load({
  custom: {
    families: ['Noto Sans KR'],
    urls: ['http://fonts.googleapis.com/earlyaccess/notosanskr.css'],
  }
});
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
