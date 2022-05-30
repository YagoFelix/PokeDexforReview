import style from './Pokemons.module.scss';
import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import CardPokemon from "../../../components/CardPokemon";
import { getOnePokemon, getPokemons } from '../../../services/axios'
import {retiraProximaPagina} from "../../../utils";
import { usePokemons } from '../../../contexts/Pokemons';
import { usePokedex } from "../../../contexts/Pokedex";
import NavBarPokemons from '../../../components/NavBarPokemons';

const Pokemons = () => {

	const {adicionaPokemon, removePokemon} = usePokedex()
	const {pokemonsExibidos, setPokemonsExibidos} = usePokemons()

	const [proximaPagina, setProximaPagina] = useState('')
	const [navBarFixa, setNavBarFixa] = useState(false)


	useEffect(() => {
		const exibeTodos = async () => {
			const { results, next } = await getPokemons()
			const regex = retiraProximaPagina(next)
			
			const novoArray = []
			for (let i = 0; i < results.length; i++) {
				const response = await getOnePokemon(results[i].url)
				novoArray.push(response)
			}

			// const novoArray = await results.map(async pokemon => await getOnePokemon(pokemon.url))
			
			setProximaPagina(regex)
			setPokemonsExibidos([...novoArray])
		}
		exibeTodos()
	}, [])


	useEffect(() => {
		const posicaoScroll = () => {
			const posicao = window.scrollY
			const limiteEmPx = 35*(window.innerHeight/100)
			posicao > limiteEmPx ? setNavBarFixa(true) : setNavBarFixa(false)
		}

		window.addEventListener('scroll', posicaoScroll)
	}, [])

	const nextPage = async () => {
		const { results, next } = await getPokemons(proximaPagina)

		const novoArray = []
			for (let i = 0; i < results.length; i++) {
				const response = await getOnePokemon(results[i].url)
				novoArray.push(response)
			}

		setProximaPagina(retiraProximaPagina(next))
		setPokemonsExibidos((pokemonsAntigos) => [...pokemonsAntigos, ...novoArray])
	}
	return (
		<>
		<NavBarPokemons navBarFixa={navBarFixa}/>
		<div className={style.principal}>
			<h2>Escolha até três pokemons!</h2>
			<div className={style.pokemons}>
				{pokemonsExibidos && pokemonsExibidos.map((pokemon, index) => (
					<CardPokemon 
					key = {pokemon.id}
					pokemon = {pokemon}
					adicionaPokemon={adicionaPokemon} 
					removePokemon={removePokemon}
					/>
				))}

			{/* {pokemons && pokemons.map((pokemon, index) => (
				<CardPokemon key={index} 
				url={pokemon.url} 
				nome={pokemon.name} 
				adicionaPokemon={adicionaPokemon} 
				removePokemon={removePokemon}
				/>
				))} */}
			</div>
			< Button aoClicar={nextPage} verMais={true}>Ver mais</Button>
		</div>
		</>
	)
}

export default Pokemons; 