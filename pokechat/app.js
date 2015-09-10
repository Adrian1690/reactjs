/*
 * Module dependencias
 */ 

import React from 'react';
import PokeTable from '/components/PokeTable';
var pokemos = [
	{ number:1 , name:'Bulbasaur' , years: 15},
	{ number:2 , name:'Ivysaur' , years: 20},
	{ number:3 , name:'VenuSaur' , years: 25},
];
var pokemon = pokemos[1];

React.render(
	<PokeTable pokemons={pokemos} />
	, document.getElementById('container')
);