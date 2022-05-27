<template>
  <nav class="nav-bar">
    <div class="socials"></div>
    <router-link to="/">Home</router-link>
    <!-- <router-link to="/"> <img src="./assets/logo.png"/> </router-link>  -->
    <router-link to="/about">About</router-link>

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.socials {
  background: blue;
  height: 50px;
  width: 300px;
  float: right;
}

.nav-bar {
  background: red;
  height: 50px;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
