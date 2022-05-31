import style from './PokemonDetails.module.scss';
import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { getOnePokemon } from '../../services/axios'
import TiposPokemon from '../TiposPokemon'
import Biografia from './Biografia';
import Stats from './Stats';
import Evolucao from './Evolucao';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
import Abas from './Abas';

const PokemonDetails = () => {
	// const grupoInfos = ['Biografia', 'Stats','Evolução']
	const { id } = useParams()
	const [url, setUrl] = useState('')
	const [pokemon, setPokemon] = useState({})
	const [imagem, setImagem] = useState('')
	const [tipos, setTipos] = useState([])

	const [abaExbida, setAbaExibida] = useState()

	const navigate = useNavigate()
	const abas = [
		{
			id: 1,
			label: 'Biografia',
			componente: <Biografia pokemon={pokemon} url={url} />
		},
		{
			id: 2,
			label: 'Stats',
			componente: <Stats pokemon={pokemon}/>
		},
		{
			id: 3,
			label: 'Evolução',
			componente: <Evolucao pokemon={pokemon}/>
		}
	]
	useEffect(() => {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`
		const obtemPokemon = async () => {
			try {
				const response = await getOnePokemon(url)
				const imgPokemon = response.sprites.other['official-artwork'].front_default
				const tiposPokemon = response.types.map(tipo => tipo.type.name)

				setTipos([...tiposPokemon])
				setImagem(imgPokemon)
				setPokemon(response)
				setUrl(response.species.url)

			} catch (error) {
				return navigate('/404')
			}
		}
		obtemPokemon()
	}, [])

	const alteraAba = (aba) => {
		setAbaExibida(aba)
	}

	return (
		<div className={style.principal}>
			<Link to={'/pokemons'}>
				<FontAwesomeIcon icon={faCircleArrowLeft} color='#FFCC00' style={{height:'1.75rem'}}/>
			</Link>
			<div className={style.pokemon}>
				<div className={style.pokemon__foto}>
					<span className={style.id}>{`#${String(pokemon.id).padStart(3, '0')}`}</span>
					<h2 className={style.nome}>{pokemon.name}</h2>
					<img src={imagem} alt="Foto do pokemón" />
					<ul className={style.pokemon__tipos}>
						{tipos.map(tipo => (
							<TiposPokemon tipo={tipo} key={tipo} />
						))}
					</ul>
				</div>
				<div className={style.pokemon__infos}>
					<div className={style.infos}>
						{/* <h3>Sobre o pokémon:</h3> */}
						<ul className={style.infos__lista}>
							{abas.map((aba) => (
								// <li 
								// className={classNames({
								// 	[style.infos__item]: true,
								// 	// [style.infos__ativo]: 
								// })}
								// onClick={() => console.log(aba)} 
								// key={index}>
								// 	{aba.label}
								// </li>
								<Abas aba={aba} 
								key={aba.id} 
								selecionada={abaExbida ? abaExbida.id === aba.id : false} 
								aoClicar={alteraAba}/>
							))}
							{/* {grupoInfos.map((grupo, index)=> (
								<li className={style.infos__item} key={index}>{grupo}</li>
							))} */}
						</ul>
						<div className={style.infos__conteudo}>
							{!abaExbida && pokemon && url &&
							// abaExbida.componente
							<Biografia pokemon={pokemon} url={url}/>
							}
							{abaExbida && pokemon && url && 
								abaExbida.componente
							}
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default PokemonDetails