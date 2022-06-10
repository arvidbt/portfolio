export default {
  name: 'menu',
  emits: ["clicked", "showFab"],
  components: {

  },
  data () {
    return {
      menuBtn: document.querySelector('.menu-btn'),
      menuOpen: false
    }
  },
  methods: {
    onClicked(AboutMe) {
      this.$emit('clicked', AboutMe)
    },
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
