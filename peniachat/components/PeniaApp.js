/*
 * Module dependencias
 */ 

import React from 'react';
import PeniaTable from './PeniaTable';
import PeniaChat from './PeniaChat';

export default class PeniaApp extends React.Component{
	constructor(props){
		super(props);
		this.onSpeak = this.onSpeak.bind(this);
		this.state = {messages : []}
	}
	
	onSpeak(obj){
		//console.log(`el word es ${text}`);
		let text = `${obj.who}: ${obj.word}!`;
		this.state.messages.push({text: text});	
		let messages = this.state.messages;
		this.setState({messages: messages});
	}

	render(){

		let penias = [
			{nombre :'Adrian', word: 'Soy Adrian'},
			{nombre :'Juan', word: 'Soy Juan'},
			{nombre :'Maria', word: 'Soy Maria'},
			{nombre :'Julia,', word: 'Soy Julia'}
		]

		return <div className="peniaApp">
			<PeniaTable penias={penias} onSpeak={this.onSpeak}/>
			<PeniaChat messages={this.state.messages}/>
		</div>
	}
}