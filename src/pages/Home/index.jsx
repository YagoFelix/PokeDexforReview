import style from './Home.module.scss'
import Ash from '../../assets/ash.png'
import Brock from '../../assets/brock.png'
import Misty from '../../assets/misty.png'
import CardTreinador from '../../components/CardTreinador'

const Home = () => {

	const treinadores = [
		{
			nome: 'Ash',
			foto: Ash
		},
		{
			nome: 'Brock',
			foto: Brock
		},
		{
			nome: 'Misty',
			foto: Misty
		}
	]
	return (
		<div className={style.principal}>
			<h2>Escolha seu treinador:</h2>
			<div className={style.treinadores}>
				{treinadores.map((treinador, index) => (
					<CardTreinador key={index} nome={treinador.nome} foto={treinador.foto} escolha={true} />
				))}
			</div>
		</div>
	)
}

/*
			{treinadores.map((treinador, index) => (
					<div className={style.treinadores__card} key={index}>
						<div className={style.treinadores__foto}>
							<img src={treinador.foto} alt="" />
						</div>
						<div className={style.treinadores__nome}>
							<h3>{treinador.nome}</h3>
						</div>
						<button className={style.treinadores__escolha}>Escolher</button>
					</div>
				))}
*/
export default Home;