<template>
  <div class="content-projects">
    <div class="section-divider-projects"></div>
    <div class="section-divider-projects"></div>
  </div>
    <div class="project-intro-container">
        <h1 class="h1-intro">These are some of the projects that I've worked on.</h1>
    </div>
    <div class=project-container>
        <!-- This websites project slot -->
        <div class="large-project-container">
            <img @click="redirect('https://github.com/arvidbt/portfolio')" class="img-left" src="../assets/images/port.png" title="test"/>
            <img @click="redirect('https://github.com/arvidbt/PBLogger')" class="img-left" src="../assets/images/homescreen.png"/>
        </div>
    </div>
    <div class=project-container>
                <!-- MIRA project slot -->
        <div class="large-project-container">
            <img class="img-left" src="../assets/images/thirty.png"/>
            <RouterLink to="/skills">
              <img class="img-left" src="../assets/images/mira.png"/>
            </RouterLink>
        </div>
                    <div v-if="expanded" class="desc-div"><h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum purus non mattis dictum. Nunc elementum semper felis quis gravida. Pellentesque lacus mauris, aliquam id vulputate sit amet, pharetra nec risus. Cras ac fermentum massa. Praesent eros turpis, consectetur sit amet vehicula quis, tempus in elit. Integer condimentum turpis ac ipsum porttitor dapibus. Etiam ultrices, nisl ac iaculis tincidunt, lectus dui porta est, sed laoreet ex sapien eu ante. Vivamus aliquam maximus cursus. Suspendisse sed purus vehicula, egestas libero nec, luctus erat. Fusce condimentum tempor tortor, sit amet molestie eros mollis quis. Nunc nec pharetra nisl, et tempus eros. Morbi.</h1></div>

    </div>
     <div class=project-container>


        <div class="large-project-container not-clickable-div">
            <img class="img-left" src="../assets/images/iceMap.png">
            <img @click="redirect('https://github.com/arvidbt/2048')" class="img-left" src="../assets/images/2048.png"/>
        </div>
    </div>
</template>

<script>
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

</script>


<style scoped>
/* Tester */
/* quick reset */

/* Slut tester */


.section-divider-projects {
  width: 100%;
  background: var(--background-color-secondary);
  height: 20rem;
}

.content-projects {
  margin-top: 20rem;
  position: relative;
}

.content-projects div {
  color: var(--text-primary-color);

  position: absolute;
  transform: translate(0%, -100%);
}

.content-projects div:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px var(--background-color-secondary);
}

.content-projects div:nth-child(2) {
  background: var(--background-color-primary);
  animation: animate 20s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      12% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}


@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');

.desc-div {
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
    background: var(--background-color-primary);
    border-radius: 15px;
    max-width: 100%;
    border: 5px solid var(--background-color-secondary);
    transition: 0.3s all ease-in-out;
    box-shadow: 5px 5px var(--accent-color);

}

.project-container {
    display: grid;
    /* grid-template-rows: repeat(3, fit-content); */
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    background: var(--background-color-primary);
    top: 50px;
    transition: 0.3s ease-in-out;
}

.not-clickable-div {
    cursor: pointer;
}

.project-intro-container {
    display: flex;
    width: 100vw;
    height: fit-content;
    background: var(--background-color-primary);
    justify-content: center;
    align-items: center;
    text-align: left;
    transition: 0.3s all ease-in-out;
}

 .project-container div:nth-child(0) {
   grid-column: 1;
   grid-row: 2 / 4;
 }

  .project-container div:nth-child(2) {
   grid-column: 1;
   grid-row: 2 / 4;
}


.h1-intro {
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    color: var(--text-primary-color);
    transition: 0.3s all ease-in-out;
}

.large-project-container {
    display: flex;
    border-radius: 30px;
    /* background-color:  var(--background-color-secondary); */
    justify-content: center;
    align-items: center;
    /* box-shadow: 5px 5px var(--accent-color); */
}

.small-project-left, .small-project-right {
    /* display: flex; */

    border-radius: 30px;
    /* background-color:  var(--background-color-secondary); */
    /* justify-content: center;
    align-items: center; */
    /* box-shadow: 5px 5px var(--accent-color); */
}

.small-project-left {
    margin-right: 20px;
}


.small-project-left:hover, .small-project-right:hover, .large-project-container:hover {
    /* background-color: var(--accent-color); */
    color: var(--text-primary-color);
    transition: 0.3s all ease-in-out;
    opacity: 1;
  }
  /* https://codepen.io/ainalem/pen/RqYZNO */
/* https://codepen.io/ig_design/pen/BajVZre */
.small-project-left:not(hover), .small-project-right:not(hover), .large-project-container:not(hover) {
    color: var(--accent-color);
    transition: 0.3s all ease-in-out;
}

.text-container {
    border-radius: 30px;
    margin-left: 20px;
    margin-right: 20px;
    text-align: left;
    width: 20vw;
}
.h1-projects {
    font-size: 28px;
    color: var(--text-primary-color);
    margin-left: 20px;
    font-family: 'Roboto', sans-serif;
}

.h2-projects {
    margin-left: 20px;
    font-family: 'Roboto', sans-serif;
    margin-top: 0px;
}

.h3-projects {
    margin-left: 20px;
    margin-right: 10px;
    font-family: 'Roboto', sans-serif;
}

.p-projects {
    margin-left: 20px;
    font-family: 'Roboto', sans-serif;
}

.img-left {
    border-radius: 20px;
    cursor: pointer;
    margin: 30px;
    height: 420px;
    border: 5px solid var(--background-color-secondary);
    transition: 0.3s all ease-in-out;
    box-shadow: 5px 5px var(--accent-color);
    /* box-shadow: 5px 5px var(--accent-color); */
}

/* https://stackoverflow.com/questions/14263594/how-to-show-text-on-image-when-hovering */
</style>
