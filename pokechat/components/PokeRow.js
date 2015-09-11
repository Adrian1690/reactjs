/*
 * Module dependencias
 */ 

import React from 'react';
import PokeAvatar from './PokeAvatar';

export default class PokeRow extends React.Component { 
	
	onClick(ev){//cada ves 	ue clickemos en los <li> pokeavatar
		// sin bind this seria window
		//llamamos a la function call para ejecutar growl con 2 parametros
		this.props.growl.call(null, this.props.name)
	}

	render() {//llamar a pokeavatar
		return <li className="pokerow" onClick={this.onClick.bind(this)}>
			<PokeAvatar  number={this.props.number}/>
			{this.props.name}
		</li>
	}
}