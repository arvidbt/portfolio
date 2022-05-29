<template>
    <div id="mySidenav" class="sidenav slide-right">
  <a href="#"><h2>About me</h2></a>
  <a href="#"><h2>My projects</h2></a>
  <a href="#"><h2>Get in touch</h2></a>

</div>
</template>

<script>
export default {
    name: 'SideNav',
}
</script>

<style scoped>
.slide-right {
  width: 100%;
  overflow: hidden;
}

.slide-right h2 {
  animation: 0.5s slide-right 0s forwards;
    transform:translateX(-100%);
}

@keyframes slide-right {
    from {
        margin-left: -500px;
    } to {
    transform:translateX(0);
  }
}

.sidenav {
  height: 100%;
  margin-top: 50px;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: var(--background-color-primary);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 0 0 0 32px;
  margin-top: 10px;
  text-decoration: none;
  font-size: 25px;
  color: var(--text-primary-color);
  display: block;
  transition: 0.3s;
  width: fit-content;
  transition: .3s;
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
  transition: .3s ease-in-out;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
