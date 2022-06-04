<template>
    <div class="project-intro-container">
        <h1 class="h1-intro">These are some of the projects that I've worked on.</h1>
    </div>
    <div class=project-container>

        <!-- This websites project slot -->
        <div class="large-project-container">
            <img @click="redirect('https://github.com/arvidbt/portfolio')" class="img-left" src="../assets/images/port.png" title="test"/>
            <img @click="redirect('https://github.com/arvidbt/PBLogger')" class="img-left" src="../assets/images/homescreen.png"/>
        </div>


                <!-- MIRA project slot -->
        <div class="large-project-container">
            <div class="img__wrap">
                <img class="img-left" src="../assets/images/thirty.png"/>
                <p class="img__description">Funkar detta?</p>
            </div>
            <div class="img__wrap">
                <img class="img-left" src="../assets/images/mira.png" @click="redirect('https://github.com/arvidbt/MIRA')"/>
                <p class="img__description">Funkar detta?</p>
            </div>
        </div>


        <div class="large-project-container not-clickable-div">
            <img class="img-left" src="../assets/images/iceMap.png">
            <img @click="redirect('https://github.com/arvidbt/2048')" class="img-left" src="../assets/images/2048.png"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyProjects',
    methods: {
        redirect(linkToSite) {
            window.open(linkToSite, 'mywindow')
        },
    }
}

</script>


<style scoped>
/* Tester */
/* quick reset */
* {
  margin: 0;
  padding: 0;
  border: 0;
}

/* relevant styles */
.img__wrap {
  position: relative;
}

.img__description {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
  color: #fff;
  visibility: hidden;
  opacity: 0;

  /* transition effect. not necessary */
  transition: opacity .2s, visibility .2s;
}

.img__wrap:hover .img__description {
  visibility: visible;
  opacity: 1;
}
/* Slut tester */

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');

.project-container {
    display: grid;
    grid-template-rows: repeat(3, fit-content);
    gap: 50px 100px;
    grid-auto-flow: row;
    justify-content: center;
    align-items: center;
    background: var(--background-color-primary);
    top: 50px;
    width: 100vw;
    height: fit-content;
    min-height: 100vh;
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

.inner-project-container{
    display: flex;
    min-width: 30vw;
    width: fit-content;
    min-height: fit-content;
    position: relative;
    color: var(--accent-color);
    border-radius: 30px;
    margin-bottom: 5vh;
    margin-top: 5vh;
    margin-left: 20px;
    margin-right: 20px;
    /* opacity: 0.7; */
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
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 420px;
    border: 5px solid var(--background-color-secondary);
    transition: 0.3s all ease-in-out;
    box-shadow: 5px 5px var(--accent-color);
    /* box-shadow: 5px 5px var(--accent-color); */
}

/* https://stackoverflow.com/questions/14263594/how-to-show-text-on-image-when-hovering */
</style>