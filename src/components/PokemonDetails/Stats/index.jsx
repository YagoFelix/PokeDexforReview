import style from './Stats.module.scss';
import { useEffect, useState } from 'react';

const Stats = (props) => {
	const {pokemon} = props
	const [stats, setStats] = useState([])

	useEffect(() => {
		const stats = pokemon.stats 
		setStats(() => [...stats])
	}, [])

	const obterTotal = () => {
		return stats
		.reduce((total, numAtual) => {
			return total + numAtual.base_stat
		}, 0)
	}

	return (
		<>
		{console.log(stats)}
		<div className={style.principal}>
		<h3 className={style.titulo}>Estatísticas bases</h3>
		{stats.map((estatistica, index) => (
				<div className={style.stats} key={index}>
					<h4 className={style.stats__titulo}>{estatistica.stat.name}</h4>
					<div className={style.stats__conteudo}>
						<p>{estatistica.base_stat}</p>
						<p>Máx</p>
					</div>
				</div>
			))}
			<div className={style.stats}>
				<h4 className={style.stats__titulo}>Total</h4>
				<div className={style.stats__conteudo}>
					<p className={style.total}>{obterTotal()}</p>
					<p className={style.total}>Max</p>
				</div>
			</div>
		</div>
		</>
	)
}

export default Stats