import { createContext, useContext, useState } from "react";
import Ash from '../assets/ash.png'
import Brock from '../assets/brock.png'
import Misty from '../assets/misty.png'

const UsuarioContext = createContext();
UsuarioContext.displayName = 'Usuario';

const UsuarioProvider = ({ children }) => {
	const personagens = [
		{
			nome: 'Ash',
			id: 1,
			foto: Ash
		},
		{
			nome: 'Brock',
			id: 2,
			foto: Brock
		},
		{
			nome: 'Misty',
			id: 3,
			foto: Misty
		}
	]

	const [personagem, setPersonagem] = useState({})

	return (
		<UsuarioContext.Provider value={{
			personagem,
			setPersonagem,
			personagens
		}}>
			{children}
		</UsuarioContext.Provider>
	)
}

const useUsuario = () => {
	const {
		personagem,
		setPersonagem,
		personagens
	} = useContext(UsuarioContext)

	const alteraNomePersonagem = (novoNome) => {
		personagem.nome = novoNome
	}

	return {
		personagem,
		setPersonagem,
		personagens,
		alteraNomePersonagem
	}
}

export {
	UsuarioProvider,
	useUsuario
}
