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
			setPokemonsExibidos(pokemonsAntigos => [pokemonPesquisado, ...pokemonsAntigos])
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
