import { useState } from 'react'
import style from './Home.module.scss'
import CardTreinador from '../../components/CardTreinador'
import { useUsuario } from '../../contexts/User'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const {
		nome, setNome, personagem, personagens
	} = useUsuario()

	const [erro, setErro] = useState('')

	const navigate = useNavigate()

	const nextStep = () => {
		if (nome.length < 3) {
			return setErro('Digite um nome válido!')
		}
		return navigate('/pokemons')
	}

	return (
		<div className={style.principal}>
			<h2>Escolha seu treinador:</h2>
			<div className={style.treinadores}>
				{personagens.map((treinador) => (
					<CardTreinador
						key={treinador.id}
						treinador={treinador}
						escolha={personagem.id === treinador.id}
					/>
				))}
			</div>
			<div className={style.nome}>
				<h3>Caso queira usar seu nome:</h3>
				<input type="text" maxLength='25' value={nome}
					onChange={(e) => setNome(e.target.value)} />
				{erro && <p className={style.erro}>{erro}</p>}
				<button type='submit' className={style.botao}
					onClick={nextStep}>Avançar!</button>
			</div>
		</div>
	)
}

export default Home;