import { createRouter, createWebHashHistory } from 'vue-router'
//import { resolve } from 'core-js/library/es6/promise'
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
					console.log(id)
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
		component: () => import(/*webpackChunkName:"aboutPage"*/'@/modulos/dbz/layout/DragonBallLayout'),
		children: [
			{
				path: 'character',
				name: 'dbz-character',
				component: () => import(/*webpackChunkName:"aboutPage"*/'@/modulos/dbz/pages/character')
			},
			//{
			//	path: 'about',
			//	name: 'dbz-about',
			//	component: () => import(/*webpackChunkName:"aboutPage"*/'@/modulos/dbz/pages/about')
			//},
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
export default router
