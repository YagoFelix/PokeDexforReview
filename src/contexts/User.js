import { createContext, useState } from "react";

export const UsuarioContext = createContext();
UsuarioContext.displayName = 'Usuario';

export default function UsuarioProvider({ children }) {
	const personagens = [
		{
			foto: Ash,
			id: 1
		},
		{
			foto: Brock,
			id: 2
		},
		{
			foto: Misty,
			id: 3
		}
	]

	const [nome, setNome] = useState('')
	const [personagem, setPersonagem] = (personagens[0])
}