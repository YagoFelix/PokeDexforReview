import { usePokedex } from '../../contexts/Pokedex'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Button from '../Button'
import style from './CardPokemon.module.scss'
import TiposPokemon from '../TiposPokemon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

const CardPokemon = (props) => {
	//animationDelay: `${delay*0.2}s`}}
	const {pokemon, delay} = props

	const { verificaCarrinho, carrinhoPokemon } = usePokedex()

	const pegaDelay = (index) => {
		let novoIndex = index
		while (novoIndex > 19) {
			novoIndex = novoIndex - 20
		}
		return novoIndex
	}

	return (
		<div className={classNames({
			[style.card]: true,
			[style.card__ativo]: verificaCarrinho(pokemon.id) === false
		})} style={{animationDelay: `${delay > 19 ? pegaDelay(delay)*0.2 : delay*0.2}s`}}>
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
				{props.fim !== true &&
				
				< Link to={`${pokemon.id}`}>
				<FontAwesomeIcon icon={faCircleArrowRight} size='2x' color='#FFCC00' />
				</Link>
				}
			</div>
			{verificaCarrinho(pokemon.id) && carrinhoPokemon.length < 3 && props.fim !== true &&
			<Button aoClicar={() => props.adicionaPokemon(pokemon.id)}>Escolher</Button>
			}
			{!verificaCarrinho(pokemon.id) && carrinhoPokemon.length > 0 && props.fim !== true &&
			<Button remover={true} aoClicar={() => props.removePokemon(pokemon.id)}>Remover</Button>
			}
		</div>
	)
}

export default CardPokemon