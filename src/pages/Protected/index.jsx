import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUsuario } from "../../contexts/User"

const ProtectedLayout = ({ children }) => {
	const navigate = useNavigate();

	const { nome } = useUsuario();

	useEffect(() => {
		if (nome.length < 3) {
			return navigate('/')
		}
	}, [])

	return children ? children : < Outlet />
}

export default ProtectedLayout