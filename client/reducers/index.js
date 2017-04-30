import todos from './todos';
import visibilityFilter from './visibilityFilter';

// to combine the two reducers
import { combineReducers } from 'redux'

const todoReducer = combineReducers({
	todos,
	visibilityFilter
})

export default todoReducer;

