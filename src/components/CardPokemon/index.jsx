import { useEffect, useState } from 'react'
import { getPokemonImg, getPokemonColor } from '../../services/axios'
import { usePokedex } from '../../contexts/Pokedex'
import classNames from 'classnames';
import Button from '../Button'
import style from './CardPokemon.module.scss'

const CardPokemon = (props) => {
	const [imagem, setImagem] = useState('')
	const [tipos, setTipos] = useState([])

	const { verificaCarrinho, carrinhoPokemon } = usePokedex()

	useEffect(() => {
		const obtemImagem = async () => {
			const response = await getPokemonImg(props.url)
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
			<div className={style.card__img}>
				<img src={imagem} alt='Foto de um pokémon' />
			</div>
			<div className={style.card__info}>
				<h3 className={style.nome}>{props.nome}</h3>
				<ul className={style.tipos}>
					{tipos.map((tipo, index) => (
						<li className={style.tipos__tipo} key={index}>{tipo}</li>
					))}
				</ul>
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