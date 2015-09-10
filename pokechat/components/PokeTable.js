/*
 * Module dependencias
 */ 
import React from 'react'; 
import PokeRow from './PokeRow';

export default class PokeTable extends React.Component {
	render(){
		// es necesario poner el key en cada iteracion para que react sepa bien cual es el elemento que actualizemos.
		return <ul className = "poketable">
			{
				this.props.pokemons.map((pokemon) =>{//iterar dentro de la lista
					return <PokeRow key={pokemon.number} name={pokemon.name} number={pokemon.number}/>

				}) 
			}
		</ul>
	}
}