<template>
    <h1>About page</h1>
    <h2>{{ name }}</h2>
    <button @click="onchangeName">
        cambiar nombre
    </button>
</template>

<script>
import { onRenderTriggered } from "vue";

    export default {

        data() {
            return {
                name: 'jaVi'
            }
        },

        methods: {
            onchangeName() {
                console.log('Se cambiará el nombre')
                this.name = 'Luis'
            }
        },

        /* ciclos de vida del options cpi */

        //beforeCreate() { console.log('beforeCreate')},
        //created() { console.log('created') },
        //beforeMount() { console.log('beforeMount') },
        //mounted() { console.log('mounted') },
        //beforeUpdate() { console.log('beforeUpdate') }    ,
        //activated() { console.log('activated') }  ,
        //deactivated() { console.log('deactivated') }   ,
        //updated() { console.log('updated') }    ,
        //beforeUnmount() { console.log('beforeUnmount') }   ,
        //unmounted() { console.log('unmounted') } ,
        //errorCaptured() { console.log('errorCaptured') } ,
        //renderTracked() { console.log('renderTracked') }   ,
        //renderTriggered() { console.log('renderTriggered') }

    }

</script>