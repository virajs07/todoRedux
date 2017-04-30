import { createStore } from 'redux';
import todoReducer from './reduers';

const defaultState = {
	todo,
	visibilityFilter
}

var store = createStore(todoReducer,defaultState);

