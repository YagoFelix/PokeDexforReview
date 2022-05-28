import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOnePokemon} from '../../services/axios'
const PokemonDetails = () => {
	const {id} = useParams()
	const [pokemon, setPokemon] = useState({})
	useEffect(() => {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`
		const obtemPokemon = async () => {
			try {
				const response = await getOnePokemon(url)
				setPokemon(response)
			} catch (error) {
				return new Error(error)
			}
		
		}
		obtemPokemon()
	}, [])
	return (
		<>
			<div>{pokemon.name}</div>
		</>
	)
}

export default PokemonDetails