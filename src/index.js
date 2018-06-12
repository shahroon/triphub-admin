import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store/index";
import './index.css';
import App from './App';
// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>    , document.getElementById('root'));
// disable ServiceWorker
// registerServiceWorker();
