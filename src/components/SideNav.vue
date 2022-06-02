<template>
  <div id="mySidenav" class="sidenav slide-right">
    <a @click="goto('aboutMe')"><h2>About me</h2></a>
    <a @click="goto('mySkills')"><h2>My Skills</h2></a>
    <a @click="goto('myProjects')"><h2>My projects</h2></a>
    <a @click="goto('getInTouch')"><h2>Get in touch</h2></a>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  emits: ["clicked"],
  components: {
  },
  methods: {
    goto(value) {
      console.log(value)
      this.$emit('clicked', value)
    }
  }
}
</script>

<style scoped>
.slide-right {
    width: 100%;
    overflow: hidden;

  }

  .slide-right h2 {
    animation: 0.5s slide-right 0s forwards;
    transform: translateX(-100%);

  }

  @keyframes slide-right {
    from {
      margin-left: -500px;
    }
    to {
      transform: translateX(0);
    }
  }

  .sidenav {
    height: 100%;
    margin-top: 70px;
    width: 300px;
    position: fixed;
    transition: 0.3s ease-in-out;
    z-index: 1;
    top: 0;
    left: 0;
    background: var(--background-color-primary);
    overflow-x: hidden;
    padding-top: 60px;
  }

  .sidenav a {
    padding: 0 0 0 32px;
    margin-top: 10px;
    text-decoration: none;
    font-size: 25px;
    color: var(--text-primary-color);
    transition: all .3s ease-in-out;
    display: block;
    width: fit-content;
    cursor: pointer;
  }

  /* When you mouse over the navigation links, change their color */
  .sidenav a:hover {
    color: var(--accent-color);
    font-size: 30px;
  }

  /* Position and style the close button (top right corner) */
  .sidenav .closebtn {
    position: absolute;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
  #main {
    transition: margin-left 0.5s;
    padding: 20px;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
</style>
