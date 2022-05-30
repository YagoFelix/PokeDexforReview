import style from './NavBarPokemons.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { useState } from 'react';
import { usePokedex } from '../../contexts/Pokedex';
import { usePokemons } from '../../contexts/Pokemons';
import { useNavigate } from 'react-router-dom';
import { getOnePokemon } from '../../services/axios';

const NavBarPokemons = ({ navBarFixa }) => {
	const navigate = useNavigate();
	const { carrinhoPokemon } = usePokedex()
	const { alteraPokemonPesquisa } = usePokemons()
	const [ input, setInput ] = useState('')
	const [	erro, setErro	] = useState(false)

	const pegaUmPokemon = async (e) => {
		e.preventDefault()
		const url = `https://pokeapi.co/api/v2/pokemon/${input}`
		try {
			const pokemonPesquisado = await getOnePokemon(url)
			alteraPokemonPesquisa(pokemonPesquisado)
			setErro(false)
			window.scrollTo(0, (40*(window.innerHeight/100)))
		} catch (error) {
			setErro(true)
			setInput('')
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
				<input type="text" 
				value={input}
				name="pokemon" 
				onChange={({ target }) => setInput(target.value)} 
				placeholder={erro ? 'Esse pokémon não existe!' : 'Digite um nome'} 
				className={classNames({
					[style.input]: true,
					[style.input__erro]: erro === true
				})}/>
				<button type="submit">
					<FontAwesomeIcon icon={faMagnifyingGlass} color='#0A285F' size='2x' />
				</button>
			</form>
			{
				carrinhoPokemon.length === 3 &&
				<button type='button' className={style.button__fim} onClick={goToPokedex}>Finalizar</button>
			}
		</nav>
	)
}

export default NavBarPokemons