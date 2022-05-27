const retiraProximaPagina = (url) => {
	const regex = new RegExp(/\?offset.*/)
	const verifica = regex.exec(url)[0]
	return verifica ? verifica : ''
}

export default retiraProximaPagina