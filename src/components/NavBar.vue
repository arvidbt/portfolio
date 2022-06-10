<template>
  <nav class="navbar" :class="{'navbar--hidden': !showNavBar}">
    <div class="left-nav-container">

      <div class="menu-btn">
        <div class="menu-btn__burger"></div>
      </div>

      <div class="theme-button-container">
          <ThemeButton/>
      </div>
    </div>
    <!-- here social links be at yeeeboi -->
    <div class="social-icons-container">
      <SocialButton link="https://www.linkedin.com/in/arvid-bergman-th%C3%B6rn-1843701b8/" icon="linkedin.svg" iconType="LinkedIn"/>
      <SocialButton link="https://github.com/arvidbt" icon="github.svg" iconType="GitHub"/>
      <SocialButton link="https://arvidbt.github.io/resume/" icon="cv.svg" iconType="CV"/>
    </div>

  </nav>
  <div>
    <SideBar @clicked="onClicked" v-if="menuOpen"/>
  </div>
</template>

<script>
import SocialButton from './SocialButton.vue'
import ThemeButton from './ThemeButton.vue'
import SideBar from './SideBar.vue'

export default {
  name: 'NavBar',
  emits: ["clicked", "showFab"],
  components: {
    SocialButton,
    ThemeButton,
    SideBar,
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
    onClicked(AboutMe) {
      this.$emit('clicked', AboutMe)
      // if(AboutMe === 'aboutMe') {
      //   this.$emit('clicked', AboutMe)
      // } else if(AboutMe === 'mySkills') {
      //   this.$emit('clicked', AboutMe)
      // } else if(AboutMe === 'myProjects') {
      //   this.$emit('clicked', AboutMe)
      // } else if(AboutMe === 'getInTouch') {
      //   this.$emit('clicked', AboutMe)
      // } else {
      //   return
      // }
    },

    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) { return }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 30) { return }
      this.showNavBar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      this.menuOpen = false
      this.menuBtn.classList.remove('open')
      this.$emit('showFab', this.showNavBar)
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
.social-icons-container {
    background-color: var(--background-color-primary);
    margin-right: 40px;
    margin-top: 20px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: top 0.3s;
    transition: 0.3s ease-in-out;
  }

  .inner-home-container-left {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
  }

  .theme-button-container {
    display: flex;
    margin-left: 40px;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
  }

  .left-nav-container {
      background-color: var(--background-color-primary);
      margin-top: 20px;
      height: 40px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      transition: 0.3s ease-in-out;
  }

  .navbar {
    margin: 0;
    height: 80px;
    width: 100vw;
    max-width: 100%;
    background-color: var(--background-color-primary);;
    position: fixed;
    top: 0px;
    right:0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    transform: translate3d(0, 0, 0);
    transition: 0.3s ease-in-out;
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

  .menu-btn {
    margin-left: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 20px;
    cursor: pointer;
    transition: all .3s ease-in-out;
  }
  .menu-btn__burger {
    width: 30px;
    height: 4px;
    background: var(--text-primary-color);
    border-radius: 1px;
    transition: .3s ease-in-out;
  }

  .menu-btn__burger::before {
    margin-bottom: 5px;
    content: '';
    position: absolute;
    width: 30px;
    height: 4px;
    background: var(--text-primary-color);
    border-radius: 5px;
    transition: .3s ease-in-out;
  }
  .menu-btn__burger::after {
    margin-bottom: 5px;
    content: '';
    position: absolute;
    width: 30px;
    height: 4px;
    background: var(--text-primary-color);
    border-radius: 5px;
    transition: .3s ease-in-out;
  }
  .menu-btn__burger::before {
    transform: translateY(-16px);
  }
  .menu-btn__burger::after {
    transform: translateY(16px);
  }
  .menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }
  .menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  .menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }
</style>
