<template>
    <div class=container>
        <!-- This websites project slot -->
        <div class="skills" @click="redirect('https://github.com/arvidbt/portfolio')">
            <img class="img-left" src="../assets/images/thirty.png"/>
            <div class="text-container">
                <h1>This website, a Vue playground.</h1>
                <h3>I made this website during the late spring of 2022 as a project for myself.</h3>
                <h3>The goal was to improve my skills in CSS and JavaScript, but also to learn the Vue framework.</h3>
                <h3>Starting with a limited knowledge of JavaScript, some experience in React, and <strong>very</strong> limited knowledge of CSS, I've learned a ton during this project. </h3>
                <p>Tools used: CSS3, HTML5, JavaScript, Vue</p>
            </div>
        </div>

        <!-- MIRA project slot -->
        <div class="skills"  @click="redirect('https://github.com/arvidbt/MIRA')">
            <img class="img-left" src="../assets/images/thirty.png"/>
            <div class="text-container">
                <h1>MIRA, a CRUD application.</h1>
                <h3>A web application me and my friend Tomas Diaz made during a introduction course to databases.</h3>
                <h3>The goal was simpel. Build a webapplication using three different database tables. We decided to build a very simpel ToDo-app, since we both were novices in JavaScript.</h3>
                <h3>I built the backend, including the REST-API, and Tomas built the frontend.</h3>
                <p>Tools used: CSS3, HTML5, JavaScript, Axios, Express, SQLite</p>
            </div>
        </div>
        <div class="skills" @click="redirect('https://github.com/arvidbt/PBLogger')">
            <img class="img-left" src="../assets/images/thirty.png"/>
            <div class="text-container">
                <h1>PBLogger, an Android training app.</h1>
                <h3>I made this application during the course Android Development, where the only requirement was to use a sensor on the phone.</h3>
                <h3>I chose to use the phones camera, to be able to film and save max lifts in squats, benchpress and deadlifts.</h3>
                <h3>Focus was to build an application that was easy to use without limiting functionality.</h3>
                <p>Tools used: Kotlin, Android Studio, Figma</p>
            </div>
        </div>
        <div class="skills">
            <img class="img-left" src="../assets/images/thirty.png"/>
            <div class="text-container">
                <h1>Thirty, a Android dice game.</h1>
                <h3>Thirty is a game where the goal is to collect as much points as possible, by combining dices that accumulates to a picked sum.</h3>
                <h3>Made during the course for Android Development, this application focuses on state management and UI. Designed according to Material UI guidelines.</h3>
                <p>Tools used: Kotlin, Android Studio, Figma</p>
            </div>
        </div>
        <div class="skills">
            <img class="img-left" src="../assets/images/thirty.png"/>
            <div class="text-container">
                <h1>Anti-Tower Defence, a game built with Swing.</h1>
                <h3>A game of Tower Defence with a twist. The goal of the game is not to defend against incoming enemies, but to get through the enemy towers.</h3>
                <h3>Built by me and three other students at Umeå University.</h3>
                <p>Tools used: Java, Swing, XML</p>
            </div>
        </div>

         <div class="skills" @click="redirect('https://github.com/arvidbt/2048')">
            <img class="img-left" src="../assets/images/thirty.png"/>
            <div class="text-container">
                <h1>2048 in Java.</h1>
                <h3>One of my favorite mobile games of all times is 2048, a game where you combine equal numbered tiles to create one new, worth twice as much. </h3>
                <h3>After building the game in C (which also can be found on my GitHub) I built it in Java, to practice using Swing.</h3>
                <h3>Arguably, the game is not very pretty - both UI and codewise - but this was my first big solo project.</h3>
                <p>Tools used: Java, Swing, C</p>
            </div>
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
.container {
      display: grid;
  grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    background: transparent;
    top: 50px;
    width: 100vw;
    height: fit-content;
    min-height: 100vh;
}

.skills{
    /* React, JS, Java, HTML5, CSS3, NodeJS, MySQL, Python, C, MaterialUI, Figma */
    display: flex;
    min-width: 30vw;
    width: fit-content;
    height: 50vh;
    position: relative;
    background-color:  var(--background-color-secondary);
    color: var(--accent-color);
    border-radius: 30px;
    margin-bottom: 5vh;
    margin-top: 5vh;
    margin-left: 20px;
    margin-right: 20px;
    opacity: 0.7;
}

.skills:hover {
    background-color: var(--accent-color);
    color: var(--text-primary-color);
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    opacity: 1;
}

.skills:not(hover) {
    transition: 0.2s all ease-in-out;
}


.text-container {
    border-radius: 30px;
    margin-left: 20px;
    margin-right: 20px;
    text-align: left;
    width: 20vw;
}

h1 {
    color: var(--text-primary-color);
    margin-left: 20px;
}

h2 {
    margin-left: 20px;
}

h3 {
    margin-left: 20px;
    margin-right: 10px;
}

p {
    margin-left: 20px;
}

.img-left {
    border-radius: 20px;
    margin-right: 100px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}



.social-icon:hover {
  height: 40px;
  transition: 0.2s all ease-in-out;
}

.social-icon:not(hover) {
  transition: 0.2s all ease-in-out;
}

.social-icon {
  height: 50px;
}

.clickable-div {
    display: flex;
    position: absolute;
    cursor: pointer;
    bottom: 10px;
    right: 40px;
}
</style>