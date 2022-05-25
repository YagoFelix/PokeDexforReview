import style from './CardTreinador.module.scss'

const CardTreinador = (props) => {
	return (
		<div className={style.card}>
			<div className={style.card__foto}>
				<img src={props.foto} alt="Foto de um treinador Pokemón" />
			</div>
			<h1 className={style.card__nome}>{props.nome}</h1>
			{props.escolha &&
				<button type='button' className={style.card__escolha}>Escolher</button>
			}
		</div>
	)
}

export default CardTreinador