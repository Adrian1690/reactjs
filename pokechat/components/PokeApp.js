/*
 * Module dependencias
 */ 
import React from 'react'; 
import PokeTable from './PokeTable';
import PokeChat from './PokeChat';
import uid from 'uid';
import $ from 'jquery';
import io from 'socket.io-client'; // importamos el cliente socket.io

export default class PokeApp extends React.Component {
	constructor(props){
		super(props);
		this.state = { messages: [], pokemons : []};
		this.onGrowl  = this.onGrowl.bind(this);// bindeamos el this en Ongrowl
		this.user = uid(10);// dale id al usuario que esta usando la aplicacion
	}

	/* metodo del cliclo de vida del component */
	componentWillMount(){ // function que se ejecuta antes de que se monte el component
		$.get('/pokemons', (pokemons) =>{
			this.setState({pokemons: pokemons});
		});

		//establecer conexion con el servidor
		this.socket = io('http://localhost:3000');
		this.socket.on('message', (message) => { //nos suscribimos a mesage
			if (message.user !== this.user){
				this.newMessage(message);
			}
		});
	}

	onGrowl(name) {
		let text = `${name}, ${name}!`;
		let message = { 
			id : uid(),
			text: text,
			user : this.user
		}
		this.newMessage(message);
		this.socket.emit('message', message); //emitimos a traves del socket que se produjo un nuevo mensaje
	}

	newMessage(message){
		this.state.messages.push(message); //devuelve la cantidad de elementos
		//setenado el estado
		let messages = this.state.messages;
		this.setState({ messages: messages});
	}

	render(){

		if(this.state.pokemons.length){
			return <div className ="pokeapp"> 
				<PokeTable pokemons={this.state.pokemons} onGrowl={ this.onGrowl }/>
				<PokeChat messages={this.state.messages} />
			</div>	
		}else{
			return <p>Cargando ...</p>
		}
		
	}
}