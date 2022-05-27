import style from './CardTreinador.module.scss';
import classNames from 'classnames';
import { useUsuario } from '../../contexts/User';
import Button from '../Button';

const CardTreinador = (props) => {

	const { setPersonagem, setNome } = useUsuario()

	const aoClicar = () => {
		setPersonagem(props.treinador)
		setNome(props.treinador.nome)
	}

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
				<Button aoClicar={aoClicar}>Escolher</Button>
			}
		</div>
	)
}

export default CardTreinador
