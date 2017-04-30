import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from '../containers/addTodo';
import VisibileTodoList from '../containers/visibleTodoList';
import Footer from './footer';

class App extends React.Component{

	render(){
		return(
			<div>
				<AddTodo/>
				<VisibileTodoList/>
				<Footer/>
			</div>
		)
	}
}

export default App;