import { useEffect, useState } from 'react'
import { getPokemonImg } from '../../services/axios'
import Button from '../Button'
import style from './CardPokemon.module.scss'

const CardPokemon = (props) => {
	const [imagem, setImagem] = useState('')
	const [tipos, setTipos] = useState([])

	const Click = () => {
		alert('oi')
	}  

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
		<div className={style.card}>
			{console.log(tipos)}
			<div className={style.card__img}>
				<img src={imagem} alt='Foto de um pokémon' />
			</div>
			<div className={style.card__info}>
				<h3 className={style.nome}>{props.nome}</h3>
				<ul className={style.tipos}>
					{tipos.map((tipo, index) => (
						<li className={style.tipos__tipo} key={index}>{tipo}</li>
					))}
					{/* <p className={style.tipos__tipo}>Vasco</p> */}
				</ul>
			</div>
			<Button aoClicar={Click}>Escolher</Button>
		</div>
	)
}

export default CardPokemon