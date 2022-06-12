<template>
<div class="mobileview-container">
  <section class="start-section" id="startPage">
    <StartPage id="startPage" @clicked="onClicked"/>
  </section>
  <NavBar/>
  <section>
    <AboutPage/>
    <TimeLine style="background-color: var(--background-color-primary)"/>
  </section>
<!--

  <section id="mySkills">
    <section><SkillsPage/></section>
  </section>

  <section id="myProjects">
    <section><ProjectsPage/></section>
  </section> -->
</div>
</template>

<script>
import StartPage from '../components/StartPage.vue'
import NavBar from '../components/NavBar.vue'
import AboutPage from '../components/AboutPage.vue'
import ProjectsPage from '../components/ProjectsPage.vue'
import GetInTouch from '../components/ContactPage.vue'
import MobileView from '../views/MobileView.vue'
import ContactPage from '../components/ContactPage.vue'
import SkillsPage from '../components/SkillsPage.vue'
import TimeLine from '../components/TimeLine.vue'
export default {
    name: 'MobileView',
    components: {
    NavBar,
    AboutPage,
    SkillsPage,
    StartPage,
    ProjectsPage,
    GetInTouch,
    MobileView,
    ContactPage,
    TimeLine,
  },
}
</script>

<style scoped>
@media screen and (max-width: 480px) {
  .mobileview-container {
      height: 100vh;
      width: 100vw;
      background: var(--background-color-primary);
  }
}
</style>
