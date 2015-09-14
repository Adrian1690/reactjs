/*
 * Module dependencias
 */ 
import React from 'react'; 
import PokeTable from './PokeTable';
import PokeChat from './PokeChat';
import uid from 'uid';

export default class PokeApp extends React.Component {
	constructor(props){
		super(props);
		this.state = { messages: []};
		this.onGrowl  = this.onGrowl.bind(this);// bindeamos el this en Ongrowl
		this.pokemons = [
			{ number:1 , name:'Bulbasaur' , years: 15},
			{ number:2 , name:'Ivysaur' , years: 20},
			{ number:3 , name:'VenuSaur' , years: 25},
		];
	}

	onGrowl(name) {
		let text = `${name}, ${name}!`;
		let message = { 
			id : uid(),
			text: text
		}
		this.state.messages.push(message); //devuelve la cantidad de elementos
		//setenado el estado
		let messages = this.state.messages;
		this.setState({ messages: messages});
	}

	render(){
		return <div className ="pokeapp"> 
			<PokeTable pokemons={this.pokemons} onGrowl={ this.onGrowl }/>
			<PokeChat messages={this.state.messages} />
		</div>
	}
}