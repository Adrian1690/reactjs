/*
 * Module dependencias
 */ 

import React from 'react/addons';//para poder usar react y transitions
import PeniaMessage from './PeniaMessage';

const { CSSTransitionGroup } = React.addons; // solo CSSTransition de addons
export default class PeniaChat extends React.Component{
	
	render(){
		return <ul className="peniachat">
			<CSSTransitionGroup transitionName="message-animation">
			{
				this.props.messages.map((message) => {
					return <PeniaMessage key={message.id} message={message.text} />
				})
			}
			</CSSTransitionGroup>
		</ul>
	}
}