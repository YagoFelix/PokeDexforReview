import style from './PaginaPadrao.module.scss';
import Header from '../Header'
import Footer from '../Footer'
import React, {useEffect, useState} from 'react'
import Loading from '../Loading'
import { Outlet } from 'react-router-dom';

const PaginaPadrao = () => {
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 2000);
	}, [])
	return (
		<>
		{loading ?
			<Loading />
			:
			<>
			<Header />
			<main className={style.container}>
				< Outlet />
			</main>
			<Footer />
			</>
		}
		</>
	)
}

export default PaginaPadrao;