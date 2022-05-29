<template>
    <div @click="redirect" v>
        <svg v-if="isCV" class="social-icon clickable-div" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="43.916px" height="43.916px" viewBox="0 0 43.916 43.916" style="enable-background:new 0 0 43.916 43.916;"
            xml:space="preserve" fill="currentColor">
            <g>
            <path fill="curentColor" d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5
            C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304
            c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709
            c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855
            L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z
            M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416
            h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"/>
            </g>
        </svg>

        <svg v-if="isGitHub" class="social-icon clickable-div" width="40" height="40" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/>
        </svg>

        <svg v-if="isLinkedIn" class="social-icon clickable-div" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve">
        <g>
        <path fill="currentColor" style="clip-rule:evenodd;" d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"/>
        <path fill="currentColor" style="clip-rule:evenodd;" d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z
            M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087
            c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345
            c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537
            c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002
            z"/>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
  name: 'SocialButton',
  props: ['link', 'icon', 'iconType'],
  data () {
    return {
      buttonIcon: this.icon,
      linkToSite: this.link,
      isCV: false,
      isGitHub: false,
      isLinkedIn: false,
    }
  },
  methods: {
    getIconType() {
        console.log(this.iconType)
        if(this.iconType === 'CV') {
            this.isCV = true
        }
        if(this.iconType === 'GitHub') {
            this.isGitHub = true
        }
        if(this.iconType === 'LinkedIn') {
            this.isLinkedIn = true
        }
    },

    redirect () {
      window.open(this.linkToSite, 'mywindow')
    },

    getImageAsset () {
      return require(`../assets/${this.buttonIcon}`)
    }
  },

  mounted() {
      this.getIconType()
  }
}
</script>

<style scoped>

svg path {
    fill:var(--text-primary-color) !important;
}

.social-icon {
  margin-left: 40px;
  height: 30px;
}

.clickable-div {
  cursor: pointer;
}

</style>
