/*
 * Module dependencias
 */ 

import React from 'react';

export default class PokeAvatar extends React.Component {
	render() {
		let url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
		return <div className="avatar-container"><img className="avatar" src={url} /></div>
	}
}