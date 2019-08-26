<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">HOME</router-link> |
      <router-link to="/conoceme">CONÓCEME</router-link> |
      <router-link to="/mis-proyectos">MIS PROYECTOS</router-link> |
      <router-link to="/mis-habilidades">MIS HABILIDADES</router-link> |
      <router-link to="/contactame">CONTÁCTAME</router-link>
    </div>
    <router-view/>
    <footer class="cyan lighten-2 flex">
      <div class="container center-align">
        <strong>Copyright &copy; 2019 · Miriam Mendoza Pilco ·</strong>
      </div>
    </footer>
  </div>
</template>

<script>
import '@/assets/css/main.scss'
export default {
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
