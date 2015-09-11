/*
 * Module dependencias
 */ 

import React from 'react';
import PeniaRow from './PeniaRow';

export default class PeniaTable extends React.Component{

	render(){
		return <ul className="peniaTable">
			{
				this.props.penias.map((penia) => {
					return <PeniaRow name={penia.nombre} word={penia.word} speak={this.props.onSpeak}/>
				})
			}
		</ul>
	}
}