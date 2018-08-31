import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './components';
import registerServiceWorker from './registerServiceWorker';
import './styles.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { modalReducer } from './reducers/uploadModal';

const store = createStore(
  modalReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

WebFont.load({
  custom: {
    families: ['Noto Sans KR'],
    urls: ['http://fonts.googleapis.com/earlyaccess/notosanskr.css'],
  }
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
