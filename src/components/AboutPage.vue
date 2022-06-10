<template>
  <div class="content-projects">
    <div class="section-divider-projects"></div>
    <div class="section-divider-projects"></div>
  </div>
<div class="aboutme-page-container">

  <div class="profile">
      <img src="../assets/images/tobig.jpeg" alt="" class="profile__image">
      <h2 class="profile__description">
        I'm a Computer Science student @ Umeå University, where I'm currently in my 3rd and final year.<br><br>
        Programming is something that came into my life at a pretty late stage, but I've taken a massive liking to it.<br><br>
        Alongside my studies, I work as a teaching assistant at various programming courses at the university. These courses include:<br><br>
        - <span style="cursor: pointer" @click="linkToCourse('https://www.umu.se/utbildning/kurser/datastrukturer-och-algoritmer-c/')">Datastructures and Algorithms</span><br>
                - <span style="cursor: pointer" @click="linkToCourse('https://www.umu.se/utbildning/kurser/objektorienterad-programmeringsmetodik/')">Objective-Oriented Programming</span><br>
                - <span style="cursor: pointer" @click="linkToCourse('https://www.umu.se/utbildning/kurser/programmeringsteknik-med-c-och-matlab/')">Programming in C and MatLab</span><span><br>
                - <span style="cursor: pointer" @click="linkToCourse('https://www.umu.se/utbildning/kurser/imperativ-programmering-c/')">Imperative Programming in C</span> <br>
                - <span style="cursor: pointer" @click="linkToCourse('https://www.umu.se/utbildning/kurser/applikationsutveckling-i-java/')">Application Development in Java.</span>
                </span>
        </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    linkToCourse(link) {
      window.open(link, 'mywindow')
    }
  }
}
</script>

<style scoped>

.section-divider-projects {
  width: 100%;
  background: var(--background-color-primary);
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
  background: var(--background-color-secondary);
  animation: animate 15s ease-in-out infinite;
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

/* Google Fonts */
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);
.aboutme-page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background-color-secondary);
    top: 50px;
    width: 100vw;
    height: 100vh;
    transition: 0.3s ease-in-out;
}

/* .img-about {
    height: 70vh;
    border-radius: 15px;
    transition: 0.3s ease-in-out;

}

.about-me-container {
    width: 40vw;
    min-width: fit-content;
    height: 70vh;
    min-height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    border-radius: 15px;
    transition: all 0.3s ease-in-out;


}

.image-container {
    background: var(--accent-color);
    width: 30vw;
    height: 60vh;
    display: flex;
    justify-content: center;
    background: transparent;
    align-items: center;

} */

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
.profile {
  display: grid;
  gap: 3rem;
  grid-auto-columns: 1fr;
  grid-template-areas:
    "image name"
    "image description";
  max-width: 50vw;
  padding: var(--size-400);
}

.blob__div {
  width: 10vw;
  height: 15vh;
  background: black;
  border-radius: 56% 44% 73% 27% / 45% 68% 32% 55%;
  transform: rotate(90deg);
}

.profile__image {
  /*   border-top-left-radius: 1rem 4rem; */
  border-radius: 56% 44% 73% 27% / 45% 68% 32% 55%;
  height: 50vh;
  border: 5px solid var(--background-color-secondary);
  box-shadow: 5px 5px var(--accent-color);
  transition: all 0.3s ease-in-out;


  grid-area: image;
}

.profile__image:hover {
  border-radius: 79% 21% 29% 71% / 11% 74% 26% 89%;
}

.profile__name {
  grid-area: name;
}

.profile__description {
  grid-area: description;
  color: var(--text-primary-color);
  border-radius: 26% 33% 73% 27% / 35% 88% 42% 5%;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease-in-out;
}

.h1-landingpage { color: var(--text-primary-color); font-family: 'Roboto', sans-serif;    font-size: 62px; font-weight: 800; line-height: 72px;  text-align: left; }

.h2-landingpage { margin-left: 20px; margin-right: 20px; color: var(--text-primary-color); font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: 800; line-height: 36px; text-align: lfet; }

.h2-title { margin-top: 20px; margin-left: 20px; margin-right: 20px; color: var(--text-primary-color); font-family: 'Roboto', sans-serif; font-size: 28px; font-weight: 800; line-height: 36px; text-align: lfet; font-style: bold;}

.p-landingpage { color: var(--text-primary-color); font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: 500; line-height: 32px; }

.a-landingpage { color: var(--text-primary-color); text-decoration: underline; }

.a-landingpage:hover { color: #1c1c1c; text-decoration: underline; }

.content {
  position: relative;

}

.content h1 {
  color: var(--text-primary-color);
  font-size: 4em;
  position: absolute;
  transform: translate(0%, -100%);
}

.content h1:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px var(--text-primary-color);
}

.content h1:nth-child(2) {
  color: var(--text-primary-color);
  animation: animate 15s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 20%,
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

</style>
