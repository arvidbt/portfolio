<template>
<div class="container">
    <div class="about-me-container"><strong>
        <p>
            Hej mitt namn e Mååååns
        </p>

        <p>
            Hej mitt namn e Mååååns
        </p>

        <p>
            Hej jag heter Mååååns
        </p>
    </strong>

    </div>

    <div class="image-container">
        <img src="../assets/arreman.png"/>
    </div>
</div>
</template>

<script>
export default {
    name: 'LandingPage',
}

</script>

<style scoped>
.container {
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: transparent;
    top: 50px;
    width: 100vw;
    height: 100vh;
}

img {
    height: 300px;
}

img:hover {
    height: 400px;
    animation: rotation 1s infinite linear;
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
    width: 20vw;
    height: fit-content;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 5px 10px var(--accent-color);
    border-radius: 15px;
    background: var(--background-color-secondary);
}

.image-container {
    width: 30vw;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
}

p {
    font-size: 24px;
    color: var(--text-primary-color);
}
</style>