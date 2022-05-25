import style from './PaginaPadrao.module.scss';
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom';

const PaginaPadrao = () => {
	return (
		<>
			<Header />
			<main className={style.container}>
				< Outlet />
			</main>
			<Footer />
		</>
	)
}

export default PaginaPadrao;