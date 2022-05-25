import style from './Footer.module.scss'
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg'
import { ReactComponent as GitHub } from '../../assets/github.svg'

const Footer = () => {
	const icones = [
		{
			svg: <Linkedin className={style.icone__img} />,
			href: 'https://www.linkedin.com/in/valderyjr'
		},
		{
			svg: <GitHub className={style.icone__img} />,
			href: 'https://www.github.com/valderyjr'
		}
	]
	return (
		<footer className={style.footer}>
			<h5>Desenvolvido por Valdery Junior</h5>
			<div className={style.footer__icones}>
				<nav>
					{icones.map((icone, index) => {
						return (
							<a
								key={index}
								href={icone.href}
								className={style.icone}
								rel="noreferrer"
								target="_blank"
							>{icone.svg}</a>
						)
					})}
				</nav>
			</div>
		</footer>
	)
}

export default Footer