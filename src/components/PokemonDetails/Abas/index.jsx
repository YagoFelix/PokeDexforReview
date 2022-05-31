import style from './Abas.module.scss';
import classNames from 'classnames';

const Abas = (props) => {
	const {aba, aoClicar, selecionada} = props
	return (
		<li 
		className={classNames({
			[style.item]: true,
			[style.item__ativo]: selecionada === true
		})}
		onClick={() => aoClicar(aba)}>
			{aba.label}
		</li>
	)
}

export default Abas