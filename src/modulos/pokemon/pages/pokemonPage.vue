<template>
    <h1>Pokemon : <span>#{{id}}</span>    </h1>

    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>
</template>
<script>
    export default {

        props: {
            id: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                pokemon:null
            }
        },

        created() {
            this.getPokemon()
        },

        methods: {
            async getPokemon() {
                try {
                    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(r => r.json());
                    //console.log(pokemon)
                    this.pokemon = pokemon
                } catch (e) {
                    // SAcar al usuario de la pantalla
                    this.$router.push('/')
                    console.log('No hay nada que hacer aqui')
                }

            }
        },

        watch: {
            id() {
                this.getPokemon() // Volver a realizar la petición cuando cambia id
            }
        }

    }


</script>