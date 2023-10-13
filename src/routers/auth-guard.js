const isAuthenticated = async (to, from, next) => {

    	return new Promise( () => {
			const random = Math.random() * 100
	    	if (random < 50) {
		    	console.log('esta Autenticado')
				next()
			} else {
				console.log('Bloqueado por isAuthenticated', random)
				next({ name:'pokemon-home' })
			}
		})
}

// Cuando esta dentro de la ruta no se valida solo cuando se sale de la ruta y se intenta volver a acceder o refresca la aplicación 
export default isAuthenticated