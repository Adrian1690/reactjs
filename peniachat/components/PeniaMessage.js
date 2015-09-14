/*
 * Module dependencias
 */ 

import React from 'react';

export default class PeniaMessage extends React.Component{

	render(){
		return <li className="peniamessage">{this.props.message}</li>
	}
}