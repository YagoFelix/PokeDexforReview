import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import PaginaPadrao from './components/PaginaPadrao'
import { UsuarioProvider } from './contexts/User'

const AppRouter = () => {
	return (
		<UsuarioProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<PaginaPadrao />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</UsuarioProvider>
	)
}

export default AppRouter;