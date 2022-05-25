import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from './pages/index'

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter;