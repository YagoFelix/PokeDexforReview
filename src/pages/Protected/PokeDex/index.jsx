import style from './PokeDex.module.scss';
import {useUsuario} from '../../../contexts/User'
import {usePokedex} from '../../../contexts/Pokedex'
import CardTreinador from '../../../components/CardTreinador'
import CardPokemon from '../../../components/CardPokemon';
import { useEffect, useState } from 'react';
import { getOnePokemon } from '../../../services/axios';

const PokeDex = () => {
	const {personagem} = useUsuario()
	const {carrinhoPokemon}= usePokedex()
	const url = 'https://pokeapi.co/api/v2/pokemon'
	const [pokemons, setPokemons] = useState([])


	useEffect(() => {
		const obtemPokemons = async () => {
			const carrinhoFinal = []
			for (let i =0; i < carrinhoPokemon.length; i++) {
				const response = await getOnePokemon(`${url}/${carrinhoPokemon[i]}`)
				carrinhoFinal.push(response)
			}
			setPokemons([...carrinhoFinal])
		}
		obtemPokemons()
	}, [])
	
	return (
		<>
		<div className={style.principal}>
			<h3>{personagem.nome}, assim seria sua trajetória no mundo Pokemón</h3>
			<div className={style.treinador}>
				<CardTreinador treinador={personagem} final={true} escolha={true}/>
			</div>
			<div className={style.pokemons}>
				{pokemons.map((pokemon) => (
					<div className={style.pokemon}>
					<CardPokemon 
						pokemon={pokemon}
						key={pokemon.id}
						fim={true}
						/>
					</div>
				))}
			</div>
		</div>
		</>
	)
}

export default PokeDex