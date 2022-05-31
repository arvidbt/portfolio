<template>
    <div class="container content">
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
        <h2>
            My name is Arvid <span style="color: var(--accent-color); transition: all 0.3s ease-in-out;">Bergman Thörn</span>
            and I'm a developer from northern Sweden. <br/> Let me introduce myself!
        </h2>

        <div @click="scrollDown('aboutMe')" class="round">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StartPage',
    emits: ["clicked"],
    methods: {
        scrollDown(value) {
            this.$emit('clicked', value)
            console.log(value)
        }
    }

}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    top: 50px;
    width: 100vw;
    height: 100vh;
    
    
}

.introduce {
    position: absolute;
    width: fit-content;
    height: 100px;
}


.round {
    position: absolute;
    border: 3px solid var(--text-primary-color);
    width: 100px;
    height: 100px;
    border-radius: 100%;
    right:    center;
    bottom:   150px;
    
}

.round:hover {
    cursor: pointer;
    border: 3px solid var(--accent-color);
}

.round span {
    z-index: 999;
    height: 3px;
    margin:1px;
    width: 30px;
    background: var(--text-primary-color);
    transition: 0.4s ease;
}

.round span:first-child {
    display: block;
    position: absolute;
    transform: rotate(45deg);
    left: 25%;
    bottom: 35%;
}

.round span:nth-child(2) {
    display: block;
    position: absolute;
    transform: rotate(-45deg);
    left: 45%;
    bottom: 35%;
}

.round span:nth-child(3) {
    display: block;
    position: absolute;
    transform: rotate(45deg);
    left: 25%;
    bottom: 54%;
}

.round span:nth-child(4) {
    display: block;
    position: absolute;
    transform: rotate(-45deg);
    left: 45%;
    bottom: 54%;
}

.round:hover span:nth-child(1) {
    transform: rotate(-135deg);
    background: var(--accent-color);
}

.round:hover span:nth-child(2) {
    transform: rotate(135deg);
    background: var(--accent-color);
}

.round:hover span:nth-child(3) {
    transform: rotate(225deg);
    background: var(--accent-color);
}

.round:hover span:nth-child(4) {
    transform: rotate(-225deg);
    background: var(--accent-color);
}




@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
h1 { color: var(--text-primary-color); font-family: 'Roboto', sans-serif;    font-size: 62px; font-weight: 800; line-height: 72px; margin: 0 0 24px; text-align: left; }

h2 { color: var(--text-primary-color); font-family: 'Roboto', sans-serif; font-size: 24px; font-weight: 800; line-height: 36px; margin: 0 0 24px; text-align: lfet; }

p { color: var(--text-primary-color); font-family: 'Roboto', sans-serif; font-size: 18px; font-weight: 500; line-height: 32px; margin: 0 0 24px; }

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
