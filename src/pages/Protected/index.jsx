import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUsuario } from "../../contexts/User"

const ProtectedLayout = ({ children }) => {
	const navigate = useNavigate();

	const { personagem } = useUsuario();

	useEffect(() => {
		if (Object.keys(personagem).length == 0) {
			return navigate('/')
		}
	}, [])

	return children ? children : < Outlet />
}

export default ProtectedLayout