import { useEffect, useState } from 'react'
import { getOnePokemon } from '../../services/axios'
import { usePokedex } from '../../contexts/Pokedex'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Button from '../Button'
import style from './CardPokemon.module.scss'
import TiposPokemon from '../TiposPokemon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

const CardPokemon = (props) => {
	const [imagem, setImagem] = useState('')
	const [tipos, setTipos] = useState([])
	const [idPokemon, setIdPokemon] = useState('')
	const [pokemon, setPokemon] = useState({})

	const { verificaCarrinho, carrinhoPokemon } = usePokedex()

	useEffect(() => {
		const obtemImagem = async () => {
			const response = await getOnePokemon(props.url)
			setPokemon(response)
			setIdPokemon(response.id)
			const imgPokemon = response.sprites.other['official-artwork'].front_default
			const tiposPokemon = response.types.map(tipo => tipo.type.name)

			setTipos([...tiposPokemon])
			setImagem(imgPokemon)
		}
		obtemImagem()
	}, [])

	return (
		<div className={classNames({
			[style.card]: true,
			[style.card__ativo]: verificaCarrinho(props.url) === false
		})}>
			{console.log(pokemon)}
			<div className={style.card__img}>
				{/* <img src={imagem} alt='Foto de um pokémon' /> */}
				{Object.keys(pokemon).length > 0 &&
					<img src={pokemon.sprites.other['official-artwork'].front_default} alt='Foto de um pokémon' />
				}
			</div>
			<div className={style.card__info}>
				<h3 className={style.nome}>{props.nome}</h3>
				<ul className={style.tipos}>
					{tipos.map((tipo, index) => (
						< TiposPokemon key={index} tipo={tipo} />
					))}
					{/* {
						pokemon.types.map(tipo => tipo.type.name).map((tipo, index) => (
							< TiposPokemon key={index} tipo={tipo}/>
						))
					} */}
				</ul>
				< Link to={`${idPokemon}`}>
				<FontAwesomeIcon icon={faCircleArrowRight} size='2x' color='#FFCC00' />
				</Link>
			</div>
			{verificaCarrinho(props.url) && carrinhoPokemon.length < 3 &&
			<Button aoClicar={() => props.adicionaPokemon(props.url)}>Escolher</Button>
			}
			{!verificaCarrinho(props.url) && carrinhoPokemon.length > 0 &&
			<Button remover={true} aoClicar={() => props.removePokemon(props.url)}>Remover</Button>
			}
		</div>
	)
}

export default CardPokemon