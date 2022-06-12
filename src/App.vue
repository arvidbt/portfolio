<template>
<div class="body-html" v-if="!$isMobile()">
    <DesktopView/>
</div>
<div v-else>
  <MobileView/>
</div>
</template>

<script>
import DesktopView from './views/DesktopView.vue'
import MobileView from './views/MobileView.vue'

export default {
  name: 'App',
  components: {
    DesktopView,
    MobileView,
  },
}
</script>

<style scoped>
.body-html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  top: 0;
  background: var(--background-color-primary);
  right:0;
  left: 0;
  max-width: 100%;
  overflow-x:hidden;
  transition: 0.3s ease-in-out;
  scroll-behavior:smooth;
}




</style>
