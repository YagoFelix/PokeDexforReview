import { Link } from 'react-router-dom'
import style from './Header.module.scss';
import Logo from '../../assets/logo-pokemon.png'

const Header = () => {
	return (
		<header className={style.cabecalho}>
			<div className={style.cabecalho__logo}>
				<img src={Logo} alt="Logo Pokémon" />
			</div>
			<h1 className={style.cabecalho__titulo}>PokeCommerce</h1>
		</header>
	)
}

export default Header