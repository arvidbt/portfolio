<template>
    <div @click="redirect">
        <img class="social-icon clickable-div" :src="getImageAsset()"/>
    </div>
</template>

<script>
export default {
  name: 'SocialButton',
  props: ['link', 'icon'],
  data () {
    return {
      buttonIcon: this.icon,
      linkToSite: this.link
    }
  },
  methods: {
    redirect () {
      window.open(this.linkToSite, 'mywindow')
    },

    getImageAsset () {
      return require(`../assets/${this.buttonIcon}`)
    }
  }
}
</script>

<style scoped>

svg {
    color: red;
}
.social-icon {
  margin-left: 40px;
  height: 30px;
}

.clickable-div {
  cursor: pointer;
}

</style>
