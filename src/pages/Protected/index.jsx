import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUsuario } from "../../contexts/User"
import { usePokedex } from "../../contexts/Pokedex";

const ProtectedLayout = ({ children }) => {
	const navigate = useNavigate();

	const { personagem } = useUsuario();
	const { carrinhoPokemon } = usePokedex()

	useEffect(() => {
		if (Object.keys(personagem).length == 0 || (carrinhoPokemon.length > 0 && carrinhoPokemon.length < 3)) {
			return navigate('/')
		}
	}, [])

	return children ? children : < Outlet />
}

export default ProtectedLayout