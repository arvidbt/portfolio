<template>
<div class="aboutme-page-container">
    <div class="image-container">
        <img class ="img-about" src="../assets/images/arreman-2.png"/>
    </div>
    <!-- 
      https://www.umu.se/utbildning/kurser/datastrukturer-och-algoritmer-c/
      https://www.umu.se/utbildning/kurser/programmeringsteknik-med-c-och-matlab/
      https://www.umu.se/utbildning/kurser/objektorienterad-programmeringsmetodik/
      https://www.umu.se/utbildning/kurser/applikationsutveckling-i-java/
      https://www.umu.se/utbildning/kurser/imperativ-programmering-c/
     -->
    <div class="about-me-container content">
        <strong>
            <h2 class="h2-title">A short introduction..</h2>
            <h2 class="h2-landingpage">
                I'm a Computer Science-student currently heading towards a B.sc at Umeå University. <br>
                Currently, I'm in my <span style="color: var(--accent-color); transition: all 0.3s ease-in-out;">3rd and final</span> year. I don't only like to learn about programming,<br> 
                I like to teach it aswell. 
                That's why I currently work as a teacher assistant alongside<br> 
                my studies, teaching various courses.
            </h2>
            <h2 class="h2-landingpage">

                Those courses include:  <span style="color: var(--accent-color); transition: all 0.3s ease-in-out;">(clicking name will redirect to coursepage)</span> <br> 
                - Datastructures and Algorithms <br> 
                - Objective-Oriented Programming<br>
                - Programming in C and MatLab
                <span style="color: var(--accent-color); transition: all 0.3s ease-in-out;"><br> 
                - Imperative Programming in C <br> 
                - Application Development in Java.
                </span>
            </h2>

            <h2 class="h2-landingpage">I pride myself in being a driven and intrested person. I like undertaking new things<br>
             and dive into it!
             </h2>

            <h2 class="h2-landingpage">
              <span style="color: var(--accent-color); transition: all 0.3s ease-in-out;">
                I also have some industry experience, where I've worked in frontend development.
              </span>
            </h2>
        </strong>
    </div>

</div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>

<style scoped>
/* Google Fonts */
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);
.aboutme-page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background-color-primary);
    top: 50px;
    width: 100vw;
    height: 100vh;
    transition: 0.3s ease-in-out;
}

.img-about {
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

}

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
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
