import style from './CardTreinador.module.scss';
import classNames from 'classnames';
import { useUsuario } from '../../contexts/User';

const CardTreinador = (props) => {

	const { setPersonagem, setNome } = useUsuario()
	return (
		<div className={classNames({
			[style.card]: true,
			[style.ativo]: props.escolha === true
		})}>
			<div className={style.card__foto} >
				<img src={props.treinador.foto} alt="Foto de um treinador Pokemón" />
			</div>
			<h1 className={style.card__nome}>{props.treinador.nome}</h1>
			{!props.escolha &&
				<button type='button' className={style.card__escolha}
					onClick={() => setPersonagem(props.treinador) & setNome(props.treinador.nome)}
				>Escolher</button>
			}
		</div>
	)
}

export default CardTreinador
