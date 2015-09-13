/*
 * Module dependencias
 */ 

import React from 'react';

export default class PokeMessage extends React.Component{

	render(){
		return <li className="pokeMessage"> {this.props.message.text}</li>
	}
}