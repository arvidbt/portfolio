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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: var(--background-color-primary);
  height: 500vh;
  width: 100vw;
  margin: 0;
  max-width: 100%;
  transition: 0.3s all ease-out;
  overflow-x:hidden;
} */

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--background-color-primary);
  height: 500vh;
  width: 100vw;
  max-width: 100%;
  overflow-x:hidden;
  transition: 0.3s all ease-out;
}
</style>
