import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UsuarioProvider } from './contexts/User'
import { PokedexProvider } from "./contexts/Pokedex"
import PaginaPadrao from './components/PaginaPadrao'
import Home from './pages/Home'
import ProtectedLayout from "./pages/Protected"
import Pokemons from "./pages/Protected/Pokemons"
import PokeDex from "./pages/Protected/PokeDex"

const AppRouter = () => {
	return (
		<UsuarioProvider>
			<PokedexProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<PaginaPadrao />}>
							<Route index element={<Home />} />
							<Route element={<ProtectedLayout />}>
								<Route path='pokemons' element={< Pokemons />}></Route>
								<Route path='pokedex' element={< PokeDex />}></Route>
							</Route>
						</Route>
					</Routes>
				</BrowserRouter>
			</PokedexProvider>
		</UsuarioProvider>
	)
}

export default AppRouter;