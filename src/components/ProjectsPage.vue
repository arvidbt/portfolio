<template>
    <div class=project-container>
        <!-- This websites project slot -->
        <div class="skills" @click="redirect('https://github.com/arvidbt/portfolio')">
            <img class="img-left" src="../assets/images/thirty.png"/>
            <div class="text-container">
                <h1 class="h1-projects">This website.</h1>
                <h3 class="h3-projects">I made this website during the late spring of 2022 as a project for myself.</h3>
                <h3 class="h3-projects">The goal was to improve my skills in CSS and JavaScript, but also to learn the Vue framework.</h3>
                <h3 class="h3-projects">Starting with a limited knowledge of JavaScript, some experience in React, and <strong>very</strong> limited knowledge of CSS, I've learned a ton during this project. </h3>
                <p class="p-projects">Tools used: CSS3, HTML5, JavaScript, Vue</p>
            </div>
        </div>
        <!-- MIRA project slot -->
        <div class="skills"  @click="redirect('https://github.com/arvidbt/MIRA')">
            <img class="img-left" src="../assets/images/thirty.png"/>
            <div class="text-container">
                <h1 class="h1-projects">MIRA.</h1>
                <h3 class="h3-projects">A web application me and my friend Tomas Diaz made during a introduction course to databases.</h3>
                <h3 class="h3-projects">The goal was simpel. Build a webapplication using three different database tables and using CRUD. We decided to build a very simpel ToDo-app, since we both were novices in JavaScript.</h3>
                <h3 class="h3-projects">I built the backend, including the REST-API, and Tomas built the frontend.</h3>
                <p class="p-projects">Tools used: CSS3, HTML5, JavaScript, Axios, Express, SQLite</p>
            </div>
        </div>
        <div class="skills" @click="redirect('https://github.com/arvidbt/PBLogger')">
            <img class="img-left" src="../assets/images/thirty.png"/>
            <div class="text-container">
                <h1 class="h1-projects">PBLogger.</h1>
                <h3 class="h3-projects">I made this application during the course Android Development, where the only requirement was to use a sensor on the phone.</h3>
                <h3 class="h3-projects">I chose to use the phones camera, to be able to film and save max lifts in squats, benchpress and deadlifts.</h3>
                <h3 class="h3-projects">Focus was to build an application that was easy to use without limiting functionality.</h3>
                <p class="p-projects">Tools used: Kotlin, Android Studio, Figma</p>
            </div>
        </div>
        <div class="skills">
            <img class="img-left" src="../assets/images/thirty.png"/>
            <div class="text-container">
                <h1 class="h1-projects">Thirty.</h1>
                <h3 class="h3-projects">Thirty is a game where the goal is to collect as much points as possible, by combining dices that accumulates to a picked sum.</h3>
                <h3 class="h3-projects">Made during the course for Android Development, this application focuses on state management and UI. Designed according to Material UI guidelines.</h3>
                <p class="p-projects">Tools used: Kotlin, Android Studio, Figma</p>
            </div>
        </div>
        <div class="skills">
            <img class="img-left" src="../assets/images/thirty.png"/>
            <div class="text-container">
                <h1 class="h1-projects">Anti-Tower Defence.</h1>
                <h3 class="h3-projects">A game of Tower Defence with a twist. The goal of the game is not to defend against incoming enemies, but to get through the enemy towers.</h3>
                <h3 class="h3-projects">Built by me and three other students at Umeå University.</h3>
                <p class="p-projects">Tools used: Java, Swing, XML</p>
            </div>
        </div>

         <div class="skills" @click="redirect('https://github.com/arvidbt/2048')">
            <img class="img-left" src="../assets/images/thirty.png"/>
            <div class="text-container">
                <h1 class="h1-projects">2048.</h1>
                <h3 class="h3-projects">One of my favorite mobile games of all times is 2048, a game where you combine equal numbered tiles to create one new, worth twice as much. </h3>
                <h3 class="h3-projects">After building the game in C (which also can be found on my GitHub) I built it in Java, to practice using Swing.</h3>
                <h3 class="h3-projects">Arguably, the game is not very pretty - both UI and codewise - but this was my first big solo project.</h3>
                <p class="p-projects">Tools used: Java, Swing, C</p>
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
.project-container {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    background: var(--background-color-primary);
    top: 50px;
    width: 100vw;
    height: fit-content;
    min-height: 100vh;
    transition: 0.3s ease-in-out;
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

.skills:not(hover) .p-projects {
    color: var(--background-color-secondary)
}

.skills:not(hover) {
    transition: 0.3s all ease-in-out;
}

.skills:hover .p-projects {
    transition: 0.3s all ease-in-out;
    color: var(--text-primary-color)
}

.text-container {
    border-radius: 30px;
    margin-left: 20px;
    margin-right: 20px;
    text-align: left;
    width: 20vw;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
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
    margin-right: 100px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 450px;
}

</style>