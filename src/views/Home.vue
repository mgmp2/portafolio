<template lang="pug">
  section#banner
    .card.text-center
      img(src="@/assets/images/icons/logo_miriam_mendoza.png" alt="icono logo miriam mendoza front-end" class="text-center")
      h1.text-light MIRIAM MENDOZA PILCO
      h2.text-center.text-secondary.text-lighten-1 Front-End Developer Jr.
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style>
img {
  width: 5rem;
  margin: 0 auto;
}
#banner {
  width: 100%;
}
</style>
