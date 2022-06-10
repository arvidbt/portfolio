<template>
  <section id="startPage">
    <StartPage id="startPage" @clicked="onClicked"/>
  </section>

  <section>
    <NavBar @clicked="onClicked" @showFab="show"/>
  </section>

  <section id="aboutMe">
    <section><AboutPage/></section>
  </section>

  <section id="mySkills">
    <section><SkillsPage/></section>
  </section>

  <section id="myProjects">
    <section><ProjectsPage/></section>
  </section>

  <button v-if="!showButton" class="button-up cssanimation sequence fadeInBottom" @click="scrollUp()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="back-to-top-icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 11l5-5m0 0l5 5m-5-5v12"
      />
    </svg>
    <strong style="color: var(--text-primary-color)">Go up!</strong>
  </button>
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
export default {
  name: 'DesktopView',
  components: {
    NavBar,
    AboutPage,
    SkillsPage,
    StartPage,
    ProjectsPage,
    GetInTouch,
    MobileView,
    ContactPage,
  },
  data() {
    return {
      showButton: false,
    }
  },
  methods: {
    onClicked(sideNavPick) {
      document.getElementById(sideNavPick).scrollIntoView({ behavior: "smooth"}, false)
    },

    show(value) {
        this.showButton = value
    },
    scrollUp() {
      document.getElementById('startPage').scrollIntoView({ behavior: "smooth"}, false)
    },
  },
  mounted() {
    this.showButton = true;
  }
}
</script>

<style scoped>
.button-up {
  background-color: var(--accent-color);
  position: fixed;
  width: 90px;
  height: 40px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  bottom: 20px;
  left: 20px;
  transform: translate3d(0, 0, 0);
  transition: 0.3s ease-in-out;
  border: none;
}

.back-to-top-icon {
  width: 1rem;
  height: 1rem;
  color: var(--text-primary-color)
}

.cssanimation, .cssanimation span {
    animation-duration: 1.5s;
    animation-fill-mode: both;
}

.cssanimation span { display: inline-block }

.fadeInBottom { animation-name: fadeInBottom }

@keyframes fadeInBottom {
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to { opacity: 1 }
}

.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 2s, opacity 2s linear;
}
</style>
