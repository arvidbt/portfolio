<template>
<div class="mobileview-container">
    <div class="content-mobile">
        <h1>503 :(</h1>
        <h1>503</h1>
        <h2 class="h2-mobile"><br><br>Site is under construction.</h2>
    </div>
    </div>
</template>

<script>
export default {
    name: 'MobileView',
}
</script>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
.content-mobile {
}

.mobileview-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: var(--background-color-primary);
}

.h2-mobile {
    font-family: 'Roboto', sans-serif;
    color: var(--text-primary-color);
}

.content-mobile h1 {
  color: var(--text-primary-color);
  font-family: 'Roboto', sans-serif;
  font-size: 4em;
  position: absolute;
  transform: translate(0%, -100%);
}

.content-mobile h1:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px var(--text-primary-color);
}

.content-mobile h1:nth-child(2) {
  color: var(--text-primary-color);
  animation: animate 15s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
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
</style>