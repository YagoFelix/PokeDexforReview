import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getOnePokemon } from '../../../../services/axios';
import style from './MiniCard.module.scss';

const MiniCard = (props) => {
	const navigate = useNavigate();
	const {nome, alteraPokemon} = props
	const [foto, setFoto] = useState()
	const url = 'https://pokeapi.co/api/v2/pokemon'
	const [id, setId] = useState()

	useEffect(() => {
		const obtemFoto = async () => {
			const response = await getOnePokemon(`${url}/${nome}`)
			await setFoto(response.sprites.other['official-artwork'].front_default)
			await setId(response.id)
		}
		obtemFoto()
	}, [])
	return (
		<>
			<div className={style.imagem} onClick={() => alteraPokemon(id)}>
			<h6>{nome}</h6>
			<img src={foto} alt="Foto de um pokémon" />
			</div>
		</>
	)
}

export default MiniCard