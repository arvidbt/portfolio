<template>
    <div class="skillpage-container">
        <h1 style="color: var(--text-primary-color)">My skills!</h1>
    </div>
</template>

<script>
export default {
    name: 'SkillsPage',
}

</script>


<style scoped>
.skillpage-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
    z-index: 1000;
    top: 50px;
    width: 100vw;
    height: 100vh;
    transition: 0.3s ease-in-out;
}
</style>
