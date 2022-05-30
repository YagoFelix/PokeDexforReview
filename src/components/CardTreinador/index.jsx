import style from './CardTreinador.module.scss';
import classNames from 'classnames';
import { useUsuario } from '../../contexts/User';
import Button from '../Button';

const CardTreinador = (props) => {

	const { setPersonagem } = useUsuario()

	const aoClicar = () => {
		setPersonagem(props.treinador)
		props.obtemNomePersonagem(props.treinador.nome)
	}

	return (
		<div className={classNames({
			[style.card]: true,
			[style.ativo]: props.escolha === true
		})}>
			<div className={style.card__foto} >
				<img className={style.foto} src={props.treinador.foto} alt="Foto de um treinador Pokemón" />
			</div>
			<div className={style.card__info}>
				<h1 className={style.card__nome}>{props.treinador.nome}</h1>
				{!props.escolha && !props.final &&
					<Button aoClicar={aoClicar}>Escolher</Button>
				}
			</div>
		</div>
	)
}

export default CardTreinador
