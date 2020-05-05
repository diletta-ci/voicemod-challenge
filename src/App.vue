<template>
    <div class="app">
        <landing-page />
    </div>
</template>

<script>
    import LandingPage from './pages/LadingPage.vue';

    export default {
        name: 'App',
        components: {
            LandingPage,
        },
    };
</script>

<style lang="scss">
@import './scss/core.scss';

</style>