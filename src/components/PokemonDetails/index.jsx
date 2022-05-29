import style from './PokemonDetails.module.scss';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOnePokemon} from '../../services/axios'
import TiposPokemon from '../TiposPokemon'

const PokemonDetails = () => {
	const {id} = useParams()
	const [pokemon, setPokemon] = useState({})
	const [imagem, setImagem] = useState('')
	const [tipos, setTipos] = useState([])

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
			} catch (error) {
				return new Error(error)
			}
		}
		obtemPokemon()
	}, [])
	return (
		<div className={style.principal}>
			{console.log(pokemon)}
			<button>Voltar</button>
			<div className={style.pokemon}>
				<div className={style.pokemon__foto}>
					<h2>{pokemon.name}</h2>	
					{console.log(pokemon)}
					<img src={imagem} alt="Foto do pokemón" />
					<ul className={style.pokemon__tipos}>
					{tipos.map(tipo => (
						<TiposPokemon tipo={tipo}/>
						))}
					</ul>
				</div>
				<div className={style.pokemon__info}>
					{/* <h2>{pokemon.name}</h2> */}
				</div>
			</div>

		</div>
	)
}

export default PokemonDetails