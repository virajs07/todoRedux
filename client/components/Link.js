import React from 'react';

class Link extends React.Component{

	linkClicked(test,e){
		e.preventDefault();
		this.props.onClick();
	}

	render(){
		const {children,active} = this.props;
		if(active){
			return <span>{children}</span>
		}
		else{
			return(
				<a href="#" onClick={this.linkClicked.bind(this,event)}>{children}</a>
			)
		}
	}
}

export default Link