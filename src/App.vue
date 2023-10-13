<template>
    <navBar />
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view />
</template>

<script>

    import aboutPage from './modulos/pokemon/pages/aboutPage'
    import listPage from './modulos/pokemon/pages/listPage'
    import navBar from'./modulos/shared/components/navBar'

    import { defineAsyncComponent } from 'vue'/*Para poder hacer lazy load en pagina diferente a router*/

    export default {
        name: 'App',
        components: {
            /* carga perezosa lazy load */
            navBar: defineAsyncComponent(() => import('./modulos/shared/components/navBar'))
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>