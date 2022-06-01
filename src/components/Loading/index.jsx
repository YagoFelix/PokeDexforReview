import style from './Loading.module.scss';
import Pokebola from '../../assets/pokebola.png';

const Loading = () => {
	return (
		<div className={style.principal}>
			<div className={style.img}>
			<h4 className={style.nome}>@valderyjr</h4>
				<img src={Pokebola} alt="Pokebola" />
			</div>
		</div>
	)
}

export default Loading