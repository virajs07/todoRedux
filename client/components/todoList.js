import React from 'react';
import Todo from './todo';

class todoList extends React.Component{

	render(){
		const {todos,onTodoClick} = this.props;
		return(
			<ul>
				{
					 todos && todos.map(todo=>{
						return <Todo 
							key={todo.id} 
							{...todo} 
							onClick={(e)=>onTodoClick(todo.id)}
						/>
					})
				}
			</ul>
		)
	}
}

export default todoList