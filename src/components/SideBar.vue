<template>
  <div id="mySidenav" class="sidenav slide-right">
    <a class="a-sidebar" @click="goto('aboutMe')"><h2>About me</h2></a>
    <a class="a-sidebar" @click="goto('myProjects')"><h2>My projects</h2></a>
    <a class="a-sidebar" @click="goto('mySkills')"><h2>My Skills</h2></a>
    <a class="a-sidebar" @click="goto('getInTouch')"><h2>Get in touch</h2></a>
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
      this.$emit('clicked', value)
    },

    getElement() {
      console.log("hej")
    }
  },
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
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');

  .sidenav {
    height: 100%;
    margin-top: 70px;
    width: 300px;
    position: fixed;
    transition: 0.3s ease-in-out;
    z-index: 1;
    top: 0;
    left: 0;
    background: transparent;
    overflow-x: hidden;
    padding-top: 60px;
  }

  .sidenav .a-sidebar {
    padding: 0 0 0 32px;
    margin-top: 10px;
    text-decoration: none;
    font-size: 18px;
    color: var(--text-primary-color);
    transition: all .3s ease-in-out;
    display: block;
    width: fit-content;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    text-decoration: none;
    background-image: linear-gradient(var(--text-primary-color), var(--text-primary-color));
    background-size: 0% 0.1em;
    background-position-y: 100%;
    background-position-x: 0%;
    background-repeat: no-repeat;
    transition: background-size 0.3s ease-in-out;
  }

  /* When you mouse over the navigation links, change their color */
  .sidenav .a-sidebar:hover, .a-sidebar:focus, .a-sidebar:active {
    color: var(--accent-color);
    background-size: 100% 0.2em;
  }

  /* Position and style the close button (top right corner) */
  .sidenav .closebtn {
    position: absolute;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav .a-sidebar {
      font-size: 18px;
    }
  }
</style>
