import {createStore, combineReducers} from 'redux';
import StartPage_reducer from './StartPage_reducer.js';


let reducers = combineReducers({
	StartPage: StartPage_reducer
})

let store = createStore(reducers);

export default store;