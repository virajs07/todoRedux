import React from 'react';

class Todo extends React.Component{

	render(){
		const {text,completed,onClick} = this.props;
		return(
			<li style={{textDecoration:completed?'line-through':'none',cursor:"pointer"}} onClick={onClick}>
				{text}
			</li>
		)
	}
}

export default Todo