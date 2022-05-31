import style from './Biografia.module.scss'
import { React, useState, useEffect } from 'react'
import { converteUnidades } from '../../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars } from '@fortawesome/free-solid-svg-icons'
import { faVenus } from '@fortawesome/free-solid-svg-icons'
import { faGenderless } from '@fortawesome/free-solid-svg-icons'

const Biografia = (props) => {
	
	const {pokemon, url} = props

	const [texto, setTexto] = useState('')
	const [habilidades, setHabilidades] = useState([])
	const [genero, setGenero] = useState(0)
	const [felicidadeBase, setFelicidadeBase] = useState(0)
	const [chanceCaptura, setChanceCaptura] = useState(0)
	const [chanceCrescimento, setChanceCrescimento] = useState('')

	useEffect(() => {
		const obtem = async () => {
				const response = await fetch(url)
				const data = await response.json()
				const habilidades = pokemon.abilities.map(abilite => abilite)

				const texto = data.flavor_text_entries.find(texto => texto.language.name === "en")

				setTexto(texto.flavor_text)
				setHabilidades([...habilidades])
				setGenero(data.gender_rate)
				setFelicidadeBase(data.base_happiness)
				setChanceCaptura(data.capture_rate)
				setChanceCrescimento(data.growth_rate.name)
		}
		obtem()
	}, [])
	return (
		<>
			<div className={style.biografia}>
				<p className={style.texto}>{texto}</p>
				<div className={style.categoria}>
					<span className={style.categoria__titulo}>Altura</span>
					<p className={style.categoria__info}>{converteUnidades('altura', pokemon.height)}</p>
				</div>
				<div className={style.categoria}>
					<span className={style.categoria__titulo}>Peso</span>
					<p className={style.categoria__info}>{converteUnidades('peso', pokemon.weight)}</p>
				</div>
				<div className={style.categoria}>
					<span className={style.categoria__titulo}>Habilidades</span>
					<ul className={style.categoria__info}>
					{habilidades && habilidades.map(habilidade => (
						<li key={habilidade.slot}>
							{habilidade.is_hidden ? `${habilidade.ability.name} (Hidden)` : habilidade.ability.name }
						</li>
					))}
					</ul>
				</div>
				<div className={style.categoria}>
				<span className={style.categoria__titulo}>Gênero</span>
					{genero !== -1 &&
						<div className={style.generos}>
							<p className={style.categoria__info}>
								<FontAwesomeIcon icon={faVenus} color='#fc5a8d' style={{marginRight:'10px'}}/>
								{converteUnidades('gfem', genero)}
							</p>
							<p className={style.categoria__info}>
							<FontAwesomeIcon icon={faMars} color='#0075BE' style={{marginRight:'10px'}}/>
								{converteUnidades('gmasc', genero)}
							</p>
						</div>
					}
					{genero === -1 && 
						<p className={style.categoria__info}>
						<FontAwesomeIcon icon={faGenderless}t style={{marginRight:'10px'}}/>
							Desconhecido
						</p>
					}
				</div>
				<h4>Treinamento</h4>
				<div className={style.categoria}>
					<span className={style.categoria__titulo}>Experiência</span>
					<p className={style.categoria__info}>{pokemon.base_experience}</p>
				</div>
				<div className={style.categoria}>
					<span className={style.categoria__titulo}>Felicidade ao ser capturado</span>
					<p className={style.categoria__info}>{felicidadeBase}</p>
				</div>
				<div className={style.categoria}>
					<span className={style.categoria__titulo}>Chance de capturar:</span>
					<p className={style.categoria__info}>{converteUnidades('captura', chanceCaptura)}</p>
				</div>
				<div className={style.categoria}>
					<span className={style.categoria__titulo}>Taxa de crescimento:</span>
					<p className={`${style.categoria__info} ${style.categoria__chance}`}>{chanceCrescimento}</p>
				</div>
			</div>
			
		</>
	)
}

export default Biografia