import React from 'react';
import { connect } from 'react-redux';
import {setVisibilityFilter} from '../actions/actionCreators';
import Link from '../components/Link';

const mapStateToProps = (state,ownProps)=>{
	return{
		active: state.visibilityFilter === ownProps.filter
	}
}

const mapDispatchToProps = (dispatch,ownProps) =>{
	return{
		onClick:()=>{
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}

var filterLink = connect(mapStateToProps,mapDispatchToProps)(Link)

export default filterLink;