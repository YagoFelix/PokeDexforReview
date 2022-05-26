import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UsuarioProvider } from './contexts/User'
import PaginaPadrao from './components/PaginaPadrao'
import Home from './pages/Home'
import ProtectedLayout from "./pages/Protected"
import Pokemons from "./pages/Protected/Pokemons"

const AppRouter = () => {
	return (
		<UsuarioProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<PaginaPadrao />}>
						<Route index element={<Home />} />
						<Route element={<ProtectedLayout />}>
							<Route path='pokemons' element={< Pokemons />}></Route>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</UsuarioProvider>
	)
}

export default AppRouter;