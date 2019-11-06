import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import store from './redux/store.js';

serviceWorker.unregister();

let rerenderEntireTree = () =>{
	ReactDOM.render(<App store = {store} />, 
		document.getElementById('root'));
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree);
