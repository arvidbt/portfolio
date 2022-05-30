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
import SideNav from  './SideNav.vue'

export default {
  name: 'NavBar',
  components: {
    SocialButton,
    ThemeButton,
    SideNav,
  },
  data () {
    return {
      showNavBar: true,
      lastScrollPosition: 0,
      menuBtn: document.querySelector('.menu-btn'),
      menuOpen: false,
    }
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) { return }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) { return }
      this.showNavBar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      this.menuOpen = false;
      this.menuBtn.classList.remove('open');
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    this.menuBtn = document.querySelector('.menu-btn')
    this.menuBtn.addEventListener('click', () => {
      if(!this.menuOpen) {
        this.menuBtn.classList.add('open');
    this.menuOpen = true;
  } else {
    this.menuBtn.classList.remove('open');
    this.menuOpen = false;
  }
  })
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
  transition: 0.3s ease-in-out;
}

.inner-home-container-left {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
}

.inner-home-container-right {
  display: flex;
  margin-left: 40px;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
}

.home-link {
  margin-left: 40px;
  color: var(--text-primary-color);
  transition: 0.3s ease-in-out;
}

.home-icon {
    background-color: var(--background-color-primary);
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: 0.3s ease-in-out;
}

.navbar {
  margin: 0;
  height: 50px;
  width: 100vw;
  max-width: 100%;
  background-color: var(--background-color-primary);;
  position: fixed;
  top: 20px;
  right:0;
  left: 0;
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
  /* border: 3px solid #fff; */
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
/* ANIMATION */
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
