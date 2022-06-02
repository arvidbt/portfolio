<template>
    <div class="contactpage-container">
        <div class="contact-container">
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
    background: transparent;
    top: 50px;
    width: 100vw;
    height: 100vh;

}

.contact-container {
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

@media (prefers-reduced-motion: no-preference) {
  .contact-animation {
    animation: wipe-enter 1s 1;
  }
}

@keyframes wipe-enter {
	0% {
		transform: scale(0, .025);
	}
	50% {
		transform: scale(1, .025);
	}
}

/* .cssanimation, .cssanimation span {
    animation-duration: 1.5s;
    animation-fill-mode: both;
}

.cssanimation span { display: inline-block }

.fadeInBottom { animation-name: fadeInBottom }

@keyframes fadeInBottom {
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to { opacity: 1 }
} */
</style>