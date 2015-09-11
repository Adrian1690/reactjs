/*
 * Module dependencias
 */ 
import React from 'react'; 
import PokeTable from './PokeTable';
import PokeChat from './PokeChat';

export default class PokeApp extends React.Component {
	constructor(props){
		super(props);
		this.state = { messages: []};
		this.onGrowl  = this.onGrowl.bind(this);// bindeamos el this en Ongrowl
	}

	onGrowl(name) {
		let text = `${name}, ${name}!`;
		 this.state.messages.push({ text: text}); //devuelve la cantidad de elementos
		//setenado el estado
		let messages = this.state.messages;
		this.setState({ messages: messages});
	}

	render(){
		let pokemons = [
			{ number:1 , name:'Bulbasaur' , years: 15},
			{ number:2 , name:'Ivysaur' , years: 20},
			{ number:3 , name:'VenuSaur' , years: 25},
		];
		return <div className ="pokeapp"> 
			<PokeTable pokemons={pokemons} onGrowl={ this.onGrowl }/>
			<PokeChat messages={this.state.messages} />
		</div>
	}
}