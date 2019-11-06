import {createStore, combineReducers} from 'redux';
import StartPage_reducer from './StartPage_reducer.js';
import TrucksPage_reducer from './TrucksPage_reducer.js';
import DriversPage_reducer from './DriversPage_reducer.js';
import Header_reducer from './Header_reducer.js'


let reducers = combineReducers({
	StartPage: StartPage_reducer,
	TrucksPage: TrucksPage_reducer,
	DriversPage: DriversPage_reducer,
	HeaderPage: Header_reducer
})

let store = createStore(reducers);

export default store;