import { createContext, useContext, useState } from "react";
import { getOnePokemon } from "../services/axios";

const PokemonsContext = createContext();
PokemonsContext.displayName = 'Pokemons';

const PokemonsProvider = ({ children }) => {
	const [pokemonsExibidos, setPokemonsExibidos] = useState([])

	return (
		<PokemonsContext.Provider value={{
			pokemonsExibidos, 
			setPokemonsExibidos
		}}>
			{children}
		</PokemonsContext.Provider>
	)
}

const usePokemons = () => {
	
	const {pokemonsExibidos, setPokemonsExibidos} = useContext(PokemonsContext)

	const alteraPokemonPesquisa = async (pokemonPesquisado) => {
		try {
			const {name} = await getOnePokemon(pokemonPesquisado)
			const pokemonObtido = {
				name: name,
				url: pokemonPesquisado
			}
			setPokemonsExibidos(pokemonsAntigos => [pokemonObtido, ...pokemonsAntigos])
		} catch (error) {
			return new Error(error)
		}
	}

	return {
		pokemonsExibidos,
		setPokemonsExibidos,
		alteraPokemonPesquisa
	}
}

export {
	PokemonsProvider,
	usePokemons
}
