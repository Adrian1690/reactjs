/*
 * Module dependencias
 */ 

import React from 'react';
import PeniaMessage from './PeniaMessage';
export default class PeniaChat extends React.Component{
	
	render(){
		return <ul>
			{
				this.props.messages.map((message) => {
					return <PeniaMessage message={message} />
				})
			}
		</ul>
	}
}