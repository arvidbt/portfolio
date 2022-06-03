<template>
    <div class="contactpage-container">
        <div class="contact-info-container">
            <h1>Let's make something happen!</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExperiencesPage',

}

</script>


<style scoped>
.contactpage-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background-color-primary);
    top: 50px;
    width: 100vw;
    height: 100vh;
    transition: 0.3s ease-in-out;
}

.contact-info-container {
    color: var(--text-primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40vw;
    height: 30vh;
    background-color: var(--background-color-secondary);
    border-radius: 20px;
    animation: wipe-enter 1s 1;
}
</style>