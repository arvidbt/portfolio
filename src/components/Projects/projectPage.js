export default {
  name: 'MyProjects',
  inheritAttrs: false,
  data() {
      return {
          expanded: false,

      }
  },
  methods: {
      redirect(linkToSite) {
          window.open(linkToSite, 'mywindow')
      },

      expand() {
          this.expanded = !this.expanded
          console.log(this.expanded)
      }
  }
}
