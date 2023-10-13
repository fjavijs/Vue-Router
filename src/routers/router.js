import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticated from './auth-guard'

const routes = [

	{
		path: '/',
		/*redirect: '/home'*//*Comentado para los para clase de multiples layout*/
		redirect: {
			name: 'pokemon'
		}

	},
	//POKEMON LAYOUT
	{
		path: '/',
		name: 'pokemon',
		component: () => import(/*webpackChunkName:"aboutPage"*/'@/modulos/pokemon/layout/pokemonLayout'),// Componente a mostrar
		children: [
			{
				path: 'home',
				name: 'pokemon-home',
				component: () => import(/*webpackChunkName:"aboutPage"*/'@/modulos/pokemon/pages/listPage')
			},
			{
				path: 'about',
				name: 'pokemon-about',
				component: () => import(/*webpackChunkName:"aboutPage"*/'@/modulos/pokemon/pages/aboutPage')
			},
			{
				path: 'pokemon-id/:id',
				name: 'pokemon-id',
				component: () => import(/*webpackChunkName:"aboutPage"*/'@/modulos/pokemon/pages/pokemonPage'),
				props: (route) => {
					const id = Number(route.params.id)
					//console.log(id)
					return isNaN(id) ? { id: 1 } : { id: id }
				}
			},
			{
				path: '',
				redirect: {
					name: 'pokemon-id'
				}
			}
		]
	},
	//-----------------
	// DBZ Layout
	{
		path: '/dbz',
		name: 'dbz',
		beforeEnter: [ isAuthenticated ],
		component: () => import(/*webpackChunkName:"aboutPage"*/'@/modulos/dbz/layout/DragonBallLayout'),
		children: [
			{
				path: 'character',
				name: 'dbz-character',
				component: () => import(/*webpackChunkName:"aboutPage"*/'@/modulos/dbz/pages/character')
			},
			{
				path: 'about',
				name: 'dbz-about',
				component: () => import(/*webpackChunkName:"aboutPage"*/'@/modulos/dbz/pages/about')
			},
			{
				path: '',
				redirect: {
					name: 'dbz-character'
				}
			}
		]
	},
	//-----------------

	{		/*lazyLoad*/
		path: '/:pathMatch(.*)*',
		component: () => import(/*webpackChunkName:"aboutPage"*/'@/modulos/shared/pages/noPageFound')
	}
]


const router = createRouter({
	  history: createWebHashHistory(),
      routes,
})

// Guard global sincrono

//router.beforeEach( (to, from, next) => {

//	///*console.log({ to, from, next });*/
//	//const random = Math.random() * 100
//	///*console.log(random)*/
//	//if (random < 50) {
//	//	console.log('autenticado')
//	//	next()
//	//} else {
//	//	console.log('Bloqueado por el forEach Guard')
//	//	next({ name:'pokemon-home'})
//	//}
//})


// Guard global asincrono

//const canAccess = () => {

//	return new Promise(resolve => {

//		const random = Math.random() * 100
//		if (random < 50) {
//			console.log('Autenticado -- CanAccess')
//			resolve(true)
//		} else {
//			console.log('Bloqueado por el forEach Guard')
//			resolve(false)
//		}
//	} )
//}
//router.beforeEach(  async( to, from, next ) => {

//	const authorized = await canAccess()

//	authorized ? next() : ({ name: 'pokemon-home' })

//})
/*TODO*/

export default router
