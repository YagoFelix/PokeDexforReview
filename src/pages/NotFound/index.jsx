import style from './NotFound.module.scss'
import pikachuChorando from '../../assets/pikachuchorando.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<>
		<Link to={'/'} className={style.voltar}>
				<FontAwesomeIcon icon={faCircleArrowLeft} color='#FFCC00' style={{height:'1.75rem'}}/>
			</Link>
		<div className={style.principal}>
			<h2>Esta página não existe.</h2>
			<img className={style.imagem} src={pikachuChorando} alt="" />
			<p>E eu continuo desempregado.......</p>
		</div>
		</>
	)
}

export default NotFound;