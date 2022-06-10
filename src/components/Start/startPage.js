export default {
  name: 'StartPage',
  emits: ["clicked"],
  methods: {
      scrollDown(value) {
          this.$emit('clicked', value)
          console.log(value)
      },
  },
}
