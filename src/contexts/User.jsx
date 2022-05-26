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

	const [nome, setNome] = useState(personagens[0].nome);
	const [personagem, setPersonagem] = useState(personagens[0])

	return (
		<UsuarioContext.Provider value={{
			nome,
			setNome,
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
		nome,
		setNome,
		personagem,
		setPersonagem,
		personagens
	} = useContext(UsuarioContext)

	return {
		nome,
		setNome,
		personagem,
		setPersonagem,
		personagens
	}
}

export {
	UsuarioProvider,
	useUsuario
}
