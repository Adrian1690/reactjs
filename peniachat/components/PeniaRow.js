/*
 * Module dependencias
 */ 

import React from 'react';

export default class PeniaRow extends React.Component {
	onClick(ev){
		//console.log(this.props.name);
		//console.log(this.props.word);
		let obj = {
			who: this.props.name,
			word: this.props.word
		}
		this.props.speak.call(null, obj);
	}

	render(){
		return <li className="peniarow" onClick={this.onClick.bind(this)} > 
			{this.props.name}
		</li>
	}
}