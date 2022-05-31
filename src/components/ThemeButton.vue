<template>
  <div>
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <span v-if="isLightMode" class="moon-span">☾</span>
      <span v-if="!isLightMode" class="sun-span">☀️</span>
      <div

        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
    </label>
  </div>
</template>

<script>
export default {
  mounted () {
    const initUserTheme = this.getTheme() || this.getMediaPreference()
    this.setTheme(initUserTheme)
  },

  data () {
    return {
      userTheme: 'light-theme',
      isLightMode: !window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  },

  methods: {
    toggleTheme () {
      const activeTheme = localStorage.getItem('user-theme')
      if (activeTheme === 'light-theme') {
        this.setTheme('dark-theme')
        this.isLightMode = false
      } else {
        this.setTheme('light-theme')
        this.isLightMode = true
      }
    },

    getTheme () {
      return localStorage.getItem('user-theme')
    },

    setTheme (theme) {
      localStorage.setItem('user-theme', theme)
      this.userTheme = theme
      document.documentElement.className = theme
    },

    getMediaPreference () {
      const hasDarkPreference = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      if (hasDarkPreference) {
        return 'dark-theme'
      } else {
        return 'light-theme'
      }
    }
  }
}
</script>

<style scoped>
@import '../assets/styles/ThemeButton.css'
</style>
