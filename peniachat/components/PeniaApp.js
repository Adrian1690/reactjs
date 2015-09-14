/*
 * Module dependencias
 */ 

import React from 'react';
import uid  from 'uid';
import $ from 'jquery';
import io from 'socket.io-client';
import PeniaTable from './PeniaTable';
import PeniaChat from './PeniaChat';

export default class PeniaApp extends React.Component{
	constructor(props){
		super(props);
		this.state = {messages : [], penias : []}
		this.onSpeak = this.onSpeak.bind(this);
		this.user = uid(10);
	}
	
	/*metodo del cliclo de vida del component*/
	componentWillMount(){// se ejecuta antes de montar el component
		$.get('/penias', (penias) => {
			this.setState({penias: penias});
		})

		//Conexión con el servidor
		this.socket = io('http://localhost:3001');
		this.socket.on('message', (message) =>{ //suscribiendome a mesage
			//console.log('llego un mensaje');
			if(message.user !== this.user){
				this.newSpeak(message);
			}
		});
	}

	onSpeak(obj){
		//console.log(`el word es ${text}`);
		let text = `${obj.who}: ${obj.word}!`;
		let message ={
			id: uid(),
			text: text,
			user : this.user
		}
		
		this.newSpeak(message);
		// emitimos al socket
		//console.log('antes de emitir');
		this.socket.emit('message', message);
	}

	newSpeak(message){
		this.state.messages.push(message);	
		let messages = this.state.messages;
		//console.log(messages);
		this.setState({messages: messages});
	}

	render(){

		if(this.state.penias.length){
			return <div className="peniaapp">
					<PeniaTable penias={this.state.penias} onSpeak={this.onSpeak}/>
					<PeniaChat messages={this.state.messages}/>
				</div>
		}else{
			return <p>Cargando ...</p>
		}
		
	}
}