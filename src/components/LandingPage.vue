<template>
<div class="landingpage-container">
    <div class="image-container">
        <img src="../assets/images/arreman-2.png"/>
    </div>
    <div class="about-me-container content">
        <strong>
            <h2>
                I'm a Computer Science-student currently heading towards a B.sc at Umeå University. Currently,
                I'm in my <span style="color: var(--accent-color); transition: all 0.3s ease-in-out;">3rd and final</span> year. I don't only like to learn about programming, I like to teach it aswell. That's
                why I currently work as a teacher assistant alongside my studies, teaching various courses.
            </h2>
            <h2>

                Those courses include Datastructures and Algorithms, Objective-Oriented Programming 
                <span style="color: var(--accent-color); transition: all 0.3s ease-in-out;">, Imperative Programming in C,
                Application Development in Java.</span>
            </h2>

            <h2>I pride myself in being a driven and intrested person. I like undertaking new things and dive into it!</h2>

            <h2><span style="color: var(--accent-color); transition: all 0.3s ease-in-out;">I also have some industry experience, where I've worked in frontend development.</span></h2>
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
.landingpage-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    top: 50px;
    width: 100vw;
    height: 100vh;
}

img {
    height: 700px;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.about-me-container {
    width: 40vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    border-radius: 15px;
    background: var(--background-color-secondary);
    transition: all 0.3s ease-in-out;


}

.image-container {
    background: var(--accent-color);
    width: 30vw;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
}

/* p {
    font-size: 24px;
    color: var(--text-primary-color);
} */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
h1 { color: var(--text-primary-color); font-family: 'Roboto', sans-serif;    font-size: 62px; font-weight: 800; line-height: 72px;  text-align: left; }

h2 { margin-left: 20px; margin-right: 20px; color: var(--text-primary-color); font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: 800; line-height: 36px; text-align: lfet; }

p { color: var(--text-primary-color); font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: 500; line-height: 32px; }

a { color: var(--text-primary-color); text-decoration: underline; }

a:hover { color: #1c1c1c; text-decoration: underline; }

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
