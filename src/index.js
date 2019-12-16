import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import store from './redux/store.js';
import { createBrowserHistory } from "history";

serviceWorker.unregister();

const history = createBrowserHistory();

let rerenderEntireTree = () =>{
	ReactDOM.render(<App history={history} store = {store} />, 
		document.getElementById('root'));
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree);
