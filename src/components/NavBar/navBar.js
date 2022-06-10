import SocialButton from '../SocialButton.vue'
import ThemeButton from '../ThemeButton.vue'
import SideBar from '../SideBar.vue'

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
