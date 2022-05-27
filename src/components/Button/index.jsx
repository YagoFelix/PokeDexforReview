import style from './Button.module.scss'
import classNames from 'classnames';

const Button = (props) => {
	const {tipo = 'button', aoClicar = () => {}, children, verMais = false, remover = false} = props
	return (
		<button type={tipo} 
		className={classNames({
			[style.button]: true,
			[style.button__mais]: verMais === true,
			[style.button__remover]: remover === true
		})} 
		onClick={aoClicar}>{children}</button>
	)
}

export default Button;