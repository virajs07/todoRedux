import React from 'react';
import {connect } from 'react-redux'
import {addTodo} from '../actions/actionCreators';
import ReactDOM from 'react-dom';

class AddTodo extends React.Component{

	submitForm(test,e){
		const {dispatch} = this.props;

		e.preventDefault();
		let input = ReactDOM.findDOMNode(this.refs.addTodo).value;
		if(!input.trim())
			return;
		else
			dispatch(addTodo(input))
		input = ""
	}

	render(){
		return(
			<div>
				<form onSubmit={this.submitForm.bind(this,event)}>
					Task : <input type="text" name="newTodo" ref="addTodo"/>
					<button type="submit">Add Todo</button>
				</form>
			</div>
		);
	}
}

AddTodo = connect()(AddTodo)

export default AddTodo;