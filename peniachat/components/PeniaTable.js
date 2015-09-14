/*
 * Module dependencias
 */ 

import React from 'react';
import PeniaRow from './PeniaRow';

export default class PeniaTable extends React.Component{

	render(){
		return <ul className="peniatable">
			{
				this.props.penias.map((penia) => {
					return <PeniaRow key={penia.id} name={penia.nombre} word={penia.word} speak={this.props.onSpeak}/>
				})
			}
		</ul>
	}
}