import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import CardPokemon from "../../../components/CardPokemon";
import { getPokemons, getPokemonImg } from '../../../services/axios'
import retiraProximaPagina from "../../../utils";
import style from './Pokemons.module.scss';
import { usePokedex } from "../../../contexts/Pokedex";

const Pokemons = () => {

	const {adicionaPokemon, removePokemon} = usePokedex()

	const [pokemons, setPokemons] = useState([]);
	const [proximaPagina, setProximaPagina] = useState('')


	useEffect(() => {
		const exibeTodos = async () => {
			const { results, next } = await getPokemons()
			const regex = retiraProximaPagina(next)

			setProximaPagina(regex)
			setPokemons([...results])
		}
		exibeTodos()
	}, [])

	const nextPage = async () => {
		const { results, next } = await getPokemons(proximaPagina)

		setProximaPagina(retiraProximaPagina(next))
		setPokemons((pokemonsAntigos) => [...pokemonsAntigos, ...results])
	}
	return (
		<div className={style.principal}>
			<h2>Escolha até três pokemons!</h2>
			<div className={style.pokemons}>

			{pokemons && pokemons.map((pokemon, index) => (
				<CardPokemon key={index} 
					url={pokemon.url} 
					nome={pokemon.name} 
					adicionaPokemon={adicionaPokemon} 
					removePokemon={removePokemon}/>
				))}
			</div>
			< Button aoClicar={nextPage} verMais={true}>Ver mais</Button>
		</div>
	)
}

export default Pokemons; 