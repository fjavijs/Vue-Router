<template>
    <div>
        <!--<router-link :to="{name:'home'}"> Pokemon list</router-link>
        <router-link :to="{name:'pokemonId' ,params:{ id:85 } }">Pokemon por id</router-link>
        <router-link v-bind:to="{name:'about'}"> About</router-link>-->
        <!--Router-link Personalizados-->
        <customLink v-for="link in links"
                    :key="links.to"
                    :link="link" />
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";


    export default {

        data() {
            return {
                links: [
                    { to: 'pokemon-home', name: 'home' },
                    { to: 'pokemon-id', name: 'Id' , id:151 },
                    { to: 'pokemon-about', name: 'about' },
                    { to: 'dbz-character', name: 'Personajes' },
                    { to: 'dbz-about', name: 'DBZ-about' },
                    { to: 'https://google.es', name: 'Google' }
                ]
            }
        },

        components: {

            customLink: defineAsyncComponent(() => import('./customLink.vue'))

        }

    }

</script>

<style scoped>
    div {
        padding: 0 30px;
    }

        div a {
            font-weight: bold;
            color: #2c3e50;
            margin: 0 10px;
        }
    /* div a.router-link-exact-active{
        color:#42b983;
    }*/
</style>
