export default {
  name: 'SocialButton',
  props: ['link', 'icon', 'iconType'],
  data () {
    return {
      buttonIcon: this.icon,
      linkToSite: this.link,
      isCV: false,
      isGitHub: false,
      isLinkedIn: false
    }
  },
  methods: {
    getIconType () {
      if (this.iconType === 'CV') {
        this.isCV = true
      }
      if (this.iconType === 'GitHub') {
        this.isGitHub = true
      }
      if (this.iconType === 'LinkedIn') {
        this.isLinkedIn = true
      }
    },

    redirect () {
      window.open(this.linkToSite, 'mywindow')
    },

    getImageAsset () {
      return require(`../../assets/${this.buttonIcon}`)
    }
  },

  mounted () {
    this.getIconType()
  }
}
