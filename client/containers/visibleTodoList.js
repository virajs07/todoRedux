import {toggleTodo} from '../actions/actionCreators'
import {connect} from 'react-redux';
import todoList from '../components/todoList';

const getVisibleTodoList = (todos,filter)=>{
	switch(filter){
		case 'SHOW_ALL':
			return todos
		case 'SHOW_COMPLETED':
			return todos.filter(t=>t.completed)
		case 'SHOW_ACTIVE':
			return todos.filter(t=>!t.completed)
	}
}

const mapStateToProps = (state)=>{
	return{
		todos:getVisibleTodoList(state.todos,state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		onTodoClick:(id)=>{
			dispatch(toggleTodo(id))
		}
	}
}

const visibleTodoList = connect(mapStateToProps,mapDispatchToProps)(todoList)

export default visibleTodoList;