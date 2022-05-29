import style from './NavBarPokemons.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { useState } from 'react';
import { usePokedex } from '../../contexts/Pokedex';
import { usePokemons } from '../../contexts/Pokemons';
import { useNavigate } from 'react-router-dom';

const NavBarPokemons = ({ navBarFixa }) => {
	const navigate = useNavigate();
	const { carrinhoPokemon } = usePokedex()
	const { pokemonsExibidos, alteraPokemonPesquisa } = usePokemons()
	const [input, setInput] = useState('')

	const pegaUmPokemon = async (e) => {
		e.preventDefault()
		const url = `https://pokeapi.co/api/v2/pokemon/${input}`
		try {
			await alteraPokemonPesquisa(url)
		} catch (error) {
			console.log(error)
		}
	}

	const goToPokedex = () => {
		return navigate('/pokedex')
	}

	return (
		<nav className={classNames({
			[style.nav]: true,
			[style.nav__fixa]: navBarFixa === true
		})}>
			<form onSubmit={pegaUmPokemon}>
				<input type="text" name="pokemon" onChange={({ target }) => setInput(target.value)} />
				<button type="submit">
					<FontAwesomeIcon icon={faMagnifyingGlass} color='#0A285F' size='2x' />
				</button>
			</form>
			{console.log(pokemonsExibidos)}
			{
				carrinhoPokemon.length === 3 &&
				<button type='button' className={style.button__fim} onClick={goToPokedex}>Finalizar</button>
			}
		</nav>
	)
}

export default NavBarPokemons