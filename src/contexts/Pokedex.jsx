import { createContext, useContext, useState } from "react";

const PokedexContext = createContext();
PokedexContext.displayName = 'Pokedex';

const PokedexProvider = ({children}) => {
	const [carrinhoPokemon, setCarrinhoPokemon] = useState([])

	return(
		<PokedexContext.Provider value={{
			carrinhoPokemon,
			setCarrinhoPokemon
		}}>
			{children}
		</PokedexContext.Provider>
	)
}

const usePokedex = () => {
	const {
		carrinhoPokemon,
		setCarrinhoPokemon
	} = useContext(PokedexContext)

	const verificaCarrinho = (novoPokemon) => {
		const verifica = carrinhoPokemon.find(pokemonsAtuais => pokemonsAtuais === novoPokemon)
		return verifica ? false : true
	}

	const adicionaPokemon = (pokemonURL) => {
		if (carrinhoPokemon.length < 3) {
			const verifica = verificaCarrinho(pokemonURL)
			if (verifica) {
				setCarrinhoPokemon((carrinhoPrevio) => [...carrinhoPrevio, pokemonURL])
			}
		}
	}

	const removePokemon = (pokemonURL) => {
		if (carrinhoPokemon.length > 0) {
			const novoCarrinho = carrinhoPokemon.filter(pokemonsAtuais => pokemonsAtuais !== pokemonURL)
			setCarrinhoPokemon(novoCarrinho)
		}
	}

	return {
		carrinhoPokemon,
		adicionaPokemon,
		verificaCarrinho,
		removePokemon
	}
}

export {
	PokedexProvider,
	usePokedex
}