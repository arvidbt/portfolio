<template>
  <nav class="navbar" :class="{'navbar--hidden': !showNavBar}">
    <div class="home-icon">

      <div class="menu-btn">
        <div class="menu-btn__burger"></div>
      </div>
      <div class=inner-home-container-left>
          <!-- <router-link style="text-decoration: none" to="/"><h1 class="home-link">Arvid!</h1></router-link> -->
      </div>
      <div class="inner-home-container-right">
          <ThemeButton/>
      </div>
    </div>
    <!-- here social links be at yeeeboi -->
    <div class="socials">
      <SocialButton link="https://www.linkedin.com/in/arvid-bergman-th%C3%B6rn-1843701b8/" icon="linkedin.svg" iconType="LinkedIn"/>
      <SocialButton link="https://github.com/arvidbt" icon="github.svg" iconType="GitHub"/>
      <SocialButton link="https://arvidbt.github.io/resume/" icon="cv.svg" iconType="CV"/>
    </div>

  </nav>
  <SideNav v-if="menuOpen"/>
</template>

<script>
import SocialButton from './SocialButton.vue'
import ThemeButton from './ThemeButton.vue'
import SideNav from './SideNav.vue'

export default {
  name: 'NavBar',
  components: {
    SocialButton,
    ThemeButton,
    SideNav
  },
  data () {
    return {
      showNavBar: true,
      lastScrollPosition: 0,
      menuBtn: document.querySelector('.menu-btn'),
      menuOpen: false
    }
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) { return }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) { return }
      this.showNavBar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      this.menuOpen = false
      this.menuBtn.classList.remove('open')
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    this.menuBtn = document.querySelector('.menu-btn')
    this.menuBtn.addEventListener('click', () => {
      if (!this.menuOpen) {
        this.menuBtn.classList.add('open')
        this.menuOpen = true
      } else {
        this.menuBtn.classList.remove('open')
        this.menuOpen = false
      }
    })
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style scoped>
@import '../assets/styles/NavBar.css'
</style>
