import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getOnePokemon } from '../../../services/axios';
import style from './Evolucao.module.scss';
import MiniCard from './MiniCard';

const Evolucao = (props) => {
	const navigate = useNavigate()
	const { pokemon, alteraPokemon } = props
	const [specie, setSpecie] = useState({})
	const [pokemonsEvolucao, setPokemonsEvolucao] = useState([])

	useEffect(() => {
		const obtemSpecie = async () => {
			const response = await getOnePokemon(pokemon.species.url)
			const data = await getOnePokemon(response.evolution_chain.url)
			setSpecie(() => data.chain)
		}
		obtemSpecie()
	}, [])

	const obterEvolucao = () => {
		let evoChain = []
		let evoData = specie
		do {
			let numberOfEvolutions = evoData.evolves_to.length;

			evoChain.push({
				"species_name": evoData.species.name,
				"min_level": !evoData ? null : evoData.min_level,
				// "trigger_name": !evoData ? null : evoData.trigger.name,
				"item": !evoData ? null : evoData.item
			});

			if (numberOfEvolutions > 1) {
				for (let i = 1; i < numberOfEvolutions; i++) {
					evoChain.push({
						"species_name": evoData.evolves_to[i].species.name,
						"min_level": !evoData.evolves_to[i] ? null : evoData.evolves_to[i].min_level,
						// "trigger_name": !evoData.evolves_to[i] ? null : evoData.evolves_to[i].trigger.name,
						"item": !evoData.evolves_to[i] ? null : evoData.evolves_to[i].item
					});
				}
			}

			evoData = evoData.evolves_to[0];
		} while (!!evoData && evoData.hasOwnProperty('evolves_to'))

		return evoChain
	}

	useEffect(() => {
		const obtemArrayEvolucao = async () => {
			if (Object.keys(specie).length > 1) {
				const response = await obterEvolucao()
				await setPokemonsEvolucao([...response])
			}
		}

		obtemArrayEvolucao()
	}, [specie])

	return (
		<div className={style.principal}>
			<h3 className={style.titulo}>Cadeia evolutiva</h3>
			{/* {console.log(pokemonsEvolucao)} */}
			<div className={style.evolucao}>
			{pokemonsEvolucao && pokemonsEvolucao.map(pokemon => (
				< MiniCard key={pokemon.species_name} nome={pokemon.species_name} alteraPokemon={alteraPokemon}/>
				// <h4>{pokemon.species_name}</h4>
				))
			}
			</div>
		</div>
	)
}

export default Evolucao