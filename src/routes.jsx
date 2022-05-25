import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/index'
import PaginaPadrao from './components/PaginaPadrao'

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<PaginaPadrao />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter;