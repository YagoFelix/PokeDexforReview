import { useState } from 'react'
import style from './Home.module.scss'
import CardTreinador from '../../components/CardTreinador'
import { useUsuario } from '../../contexts/User'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const {
		personagem, personagens, alteraNomePersonagem
	} = useUsuario()

	const [erro, setErro] = useState('')
	const [nome, setNome] = useState('')

	const obtemNomePersonagem = (nome) => {
		setNome(nome)
	}

	const navigate = useNavigate()

	const nextStep = () => {
		if (nome.length < 3 || Object.keys(personagem).length === 0) {
			return setErro('Selecione um personagem ou digite um nome válido!')
		}

		alteraNomePersonagem(nome)
		navigate('/pokemons')
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
						obtemNomePersonagem = {obtemNomePersonagem}
					/>
				))}
			</div>
			<div className={style.nome}>
				<h3>Caso queira usar seu nome:</h3>
				<input type="text" maxLength='25' value={nome}
					onChange={(e) => setNome(e.target.value)} />
				<button type='button' className={style.botao}
					onClick={() => nextStep()}>Avançar!</button>
			</div>
					{erro && <p className={style.erro}>{erro}</p>}
		</div>
	)
}

export default Home;