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
	const {pokemon} = props

	const { verificaCarrinho, carrinhoPokemon } = usePokedex()

	return (
		<div className={classNames({
			[style.card]: true,
			[style.card__ativo]: verificaCarrinho(pokemon.id) === false
		})}>
			<div className={style.card__img}>
				<img src={pokemon.sprites.other['official-artwork'].front_default} alt='Foto de um pokémon' />
			</div>
			<div className={style.card__info}>
				<h3 className={style.nome}>{pokemon.name}</h3>
				<ul className={style.tipos}>
					{pokemon.types.map(tipo => tipo.type.name).map((tipo, index) => (
						<TiposPokemon key={index} tipo={tipo} />
					))}
				</ul>
				< Link to={`${pokemon.id}`}>
				<FontAwesomeIcon icon={faCircleArrowRight} size='2x' color='#FFCC00' />
				</Link>
			</div>
			{verificaCarrinho(pokemon.id) && carrinhoPokemon.length < 3 &&
			<Button aoClicar={() => props.adicionaPokemon(pokemon.id)}>Escolher</Button>
			}
			{!verificaCarrinho(pokemon.id) && carrinhoPokemon.length > 0 &&
			<Button remover={true} aoClicar={() => props.removePokemon(pokemon.id)}>Remover</Button>
			}
		</div>
	)
}

export default CardPokemon