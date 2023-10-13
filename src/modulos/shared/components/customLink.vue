<template>

    <a v-if="isExternalLink"
       target="_blank"
       :href="link.to"
       class="is-active">
        {{link.name}}
    </a>
    <!--{ name: link.to, params:{ id:link.id} } esto iria en el to si quitamos la propiedad computada route-->
    <router-link v-else
                 :to="{ name: link.to, params:{ id:link.id} }"
                 v-slot="{isActive}">
        <!--href,-->
        <a :class="isActive ? 'is-active' : 'normal-link'">
            {{link.name}}
        </a>
    </router-link>

</template>

<script>

    export default {
        props: {
            link: {
                type: Object,
                required:true
            }
        },

        computed: {
            isExternalLink() {
                return this.link.to.startsWith('http')// Si el link computado empieza por http usa <a></a> de la cabecara y si no el <router-link>
            },

            //route(){{

            //    return this.link.id === undefined ? { name: this.link.to } : { name: this.link.to, params:{ id:this.link.id}}

            //    // Si this.link.id es undefined mando solo el nombre sino lo mando todo al to: del <router-link>

            //}}
        }
    }

</script>

<style scoped>
    .is-active {
        color: #42b983;
    }

    .normal-link {
        color: aqua;
    }
</style>