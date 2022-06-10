export default {
  name: 'SideNav',
  emits: ["clicked"],
  components: {
  },
  methods: {
    goto(value) {
      this.$emit('clicked', value)
    },

    getElement() {
      console.log("hej")
    }
  },
}
