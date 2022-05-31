import style from './Stats.module.scss';
import { useEffect, useState } from 'react';
import { converteUnidades } from '../../../utils';

const Stats = (props) => {
	const {pokemon} = props
	const [stats, setStats] = useState([])

	useEffect(() => {
		const novasEstatisticas = pokemon.stats.map(stat => {
			stat.max = stat.stat.name == 'hp' ? converteUnidades('max1', stat.base_stat) : converteUnidades('max2', stat.base_stat)
			return stat
		})
		setStats(() => [...novasEstatisticas])
	}, [])

	const obterTotal = () => {
		return stats
		.reduce((total, numAtual) => {
			return total + numAtual.base_stat
		}, 0)
	}

	return (
		<>
		<div className={style.principal}>
		<h3 className={style.titulo}>Estatísticas bases</h3>
		{stats && stats.map((estatistica, index) => (
				<div className={style.stats} key={index}>
					<h4 className={style.stats__titulo}>{estatistica.stat.name}</h4>
					<div className={style.stats__conteudo}>
						<div className={style.stats__barra} >
							<p>{estatistica.base_stat}</p>
							<span className={style.barra}>
								<span 
								className={style.ativa} 
								style={{width:`${((estatistica.base_stat/estatistica.max)*100)}%`}}>
								</span>
							</span>
						</div>
						<p className={style.max}>{estatistica.max}</p>
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