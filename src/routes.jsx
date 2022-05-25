import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import PaginaPadrao from './components/PaginaPadrao'

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<PaginaPadrao />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter;