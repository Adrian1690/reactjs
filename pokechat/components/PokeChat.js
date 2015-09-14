/*
 * Module dependencias
 */ 

import React from 'react/addons';// addons no viene por defecto en react
import PokeMessage from './PokeMessage';

const { CSSTransitionGroup } = React.addons; // solo tomamos el atributo CSSTransitionGroup de addons

export default class PokeChat extends React.Component{

	render(){
		return <ul className="pokechat">
			<CSSTransitionGroup transitionName="message-animation" > 
			{
				this.props.messages.map((message)=>{
					return <PokeMessage key={message.id} message={message} />
				})
			}
			</CSSTransitionGroup>
		</ul>
	}
}