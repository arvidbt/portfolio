<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--background-color-primary);
  height: 500vh;
  width: 100vw;
    top: 0;
  right:0;
  left: 0;
  max-width: 100%;
  overflow-x:hidden;
  transition: 0.3s ease-in-out;
}
</style>
