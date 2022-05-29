import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UsuarioProvider } from './contexts/User'
import { PokedexProvider } from "./contexts/Pokedex"
import { PokemonsProvider } from "./contexts/Pokemons"
import PaginaPadrao from './components/PaginaPadrao'
import Home from './pages/Home'
import PokemonDetails from "./components/PokemonDetails"
import ProtectedLayout from "./pages/Protected"
import Pokemons from "./pages/Protected/Pokemons"
import PokeDex from "./pages/Protected/PokeDex"

const AppRouter = () => {
	return (
		<UsuarioProvider>
			<PokedexProvider>
				<PokemonsProvider>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<PaginaPadrao />}>
								<Route index element={<Home />} />
								<Route element={<ProtectedLayout />}>
									<Route path='pokemons'>
										<Route index element={<Pokemons />} />
										<Route path=':id' element={<PokemonDetails />} />
									</Route>
									<Route path='pokedex' element={< PokeDex />} />
								</Route>
							</Route>
						</Routes>
					</BrowserRouter>
				</PokemonsProvider>
			</PokedexProvider>
		</UsuarioProvider>
	)
}

export default AppRouter;