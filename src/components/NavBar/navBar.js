import SocialButton from '../SocialButton.vue'
import ThemeButton from '../ThemeButton.vue'
import SideBar from '../SideBar.vue'
import HamburgerMenu from '../HamburgerMenu.vue'

export default {
  name: 'NavBar',
  emits: ["clicked", "showFab"],
  components: {
    SocialButton,
    ThemeButton,
    SideBar,
    HamburgerMenu
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
    onClicked(value) {
      this.$emit('clicked', value)
    },

    onScroll () {
      if(this.$isMobile()) { return }
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) { return }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 30) { return }
      this.showNavBar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      this.$emit('showFab', this.showNavBar)
    }
  },
  mounted () {
      window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
