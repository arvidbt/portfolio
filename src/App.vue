<template>
<div v-if="true">
<StartPage id="startPage" @clicked="onClicked"/>
<!-- <LandingPage id="aboutMe"/>
<NavBar @clicked="onClicked" @showFab="show"/>
<ExperiencesPage id="mySkills"/>
<ProjectsPage id="myProjects"/>
<GetInTouch id="getInTouch"/> -->
<button v-if="!showButton" class="button cssanimation sequence fadeInBottom" @click="scrollUp()">
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
</div>
<!-- IF ON PHONE!!! -->
<div v-else class="mobile-view">
  <NavBar @clicked="onClicked" @showFab="show"/>
  <h1 style="color: var(--text-primary-color)">503 | Mobile site not ready yet.</h1>
</div>
</template>

<script>
import StartPage from './components/StartPage.vue'
import NavBar from './components/NavBar.vue'
import LandingPage from './components/LandingPage.vue'
import ExperiencesPage from './components/SkillsPage.vue'
import ProjectsPage from './components/ProjectsPage.vue'
import GetInTouch from './components/GetInTouch.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    LandingPage,
    ExperiencesPage,
    StartPage,
    ProjectsPage,
    GetInTouch,
  },

  data() {
    return {
      showButton: false,
    }
  },
  methods: {
    onClicked(sideNavPick) {
      this.goto(sideNavPick) 
    
    },
    goto(componentID) {
      console.log("here!")
      const scrollinto = document.querySelector('#'+componentID)
      scrollinto.scrollIntoView({ behavior: "smooth" }, false)
    },
    show(value) {
      console.log(value)
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

<style>
.button {
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

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--background-color-primary);
  width: 100vw;
  top: 0;
  right:0;
  left: 0;
  max-width: 100%;
  overflow-x:hidden;
  transition: 0.3s ease-in-out;
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
