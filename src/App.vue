<template>
<StartPage @clicked="onClicked"/>
<LandingPage id="aboutMe"/>
<NavBar @clicked="onClicked" @showFab="show"/>
<ExperiencesPage id="mySkills"/>
<ProjectsPage id="myProjects"/>
<GetInTouch id="getInTouch"/>
<button v-if="!showButton" class="button" :class="{'button--hidden': !showButton}">UP</button>
</template>

<script>
import StartPage from './components/StartPage.vue'
import NavBar from './components/NavBar.vue'
import LandingPage from './components/LandingPage.vue'
import ExperiencesPage from './components/ExperiencesPage.vue'
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
       if(sideNavPick === 'aboutMe') {
        this.goto(sideNavPick)
      } else if(sideNavPick === 'myProjects') {
        this.goto(sideNavPick)
      } else if(sideNavPick === 'getInTouch') {
        this.goto(sideNavPick)
      } else if(sideNavPick === 'mySkills') {
        this.goto(sideNavPick)
      } else {
        return
      }
    },
    goto(componentID) {
      const scrollinto = document.querySelector('#'+componentID)
      scrollinto.scrollIntoView({ behavior: "smooth" }, false)
    },
    show(value) {
        this.showButton = value
    },
  }
}
</script>

<style>
.button {
  background-color: #f4511e;
  position: fixed;
  width: 60px;  
  height: 60px;
  border-radius: 30px;
  bottom: 20px;
  transform: translate3d(0, 0, 0);
    transition: 0.3s ease-in-out;
}

  .button.button--hidden {
    box-shadow: none;
    transform: translate3d(0, 0%, 0);
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
</style>
