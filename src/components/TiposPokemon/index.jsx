import style from './Tipos.module.scss';
import { defineCorTipo } from '../../utils';

const TiposPokemon = (props) => {
	const {tipo} = props
	const {backgroundColor} = defineCorTipo(tipo)
	return (
		<>
			<li className={style.tipo} style={{backgroundColor:backgroundColor}}>{tipo}</li>
		</>
	)
}

export default TiposPokemon