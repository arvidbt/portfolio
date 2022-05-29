<template>
  <nav class="navbar" :class="{'navbar--hidden': !showNavBar}">
    <div class="home-icon">
      <div class=inner-home-container-left>
          <router-link style="text-decoration: none" to="/"><h1 class="home-link">Arvid!</h1></router-link>
      </div>
      <div class="inner-home-container-right">
          <ThemeButton/>
      </div>
    </div>
    <!-- here social links be at yeeeboi -->
    <div class="socials">
      <SocialButton link="https://www.linkedin.com/in/arvid-bergman-th%C3%B6rn-1843701b8/" icon="linkedin.svg"/>
      <SocialButton link="https://github.com/arvidbt" icon="github.svg"/>
      <SocialButton link="https://arvidbt.github.io/resume/" icon="cv.svg"/>

    </div>

  </nav>
</template>

<script>
import SocialButton from './SocialButton.vue'
import ThemeButton from './ThemeButton.vue'

export default {
  name: 'NavBar',
  components: {
    SocialButton,
    ThemeButton
  },
  data () {
    return {
      showNavBar: true,
      lastScrollPosition: 0
    }
  },
  methods: {
    redirectLinkedIn () {
      window.open('https://www.linkedin.com/in/arvid-bergman-th%C3%B6rn-1843701b8/', 'mywindow')
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) { return }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) { return }
      this.showNavBar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      console.log(this.lastScrollPosition)
    }
  },
  mounted () {
    console.log('Mounted')
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style scoped>
.socials {
  background-color: var(--background-color-primary);
  margin-right: 40px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 0.3s;
  transition: 0.3s all ease-out;
}

.inner-home-container-left {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s all ease-out;
}

.inner-home-container-right {
  display: flex;
  margin-left: 40px;
  justify-content: center;
  align-items: center;
  transition: 0.3s all ease-out;
}

.home-link {
  color: var(--text-primary-color);
}

.home-icon {
    background-color: var(--background-color-primary);
    margin-left: 40px;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: 0.3s all ease-out;
}

.navbar {
  margin: 0;
  height: 50px;
  width: 100vw;
  max-width: 100%;
  background-color: var(--background-color-primary);;
  position: fixed;
  top: 0;
  right:0;
  left: 0;
  display: flex;
  justify-content: space-between;
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -120%, 0);
}

.social-icon {
  height: 40px;
}

.clickable-div {
  cursor: pointer;
}
</style>
