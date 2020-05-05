<template>
    <div class="voices-favourite">
        <title-section :title-text="copyTitle" />
        <voices-wrapper :voices-list="data" />
    </div>
</template>

<script>
    import TitleSection from './TitleSection.vue';
    import VoicesWrapper from './VoicesWrapper.vue';

    export default {
        components: {
            TitleSection,
            VoicesWrapper,
        },
        props: {
            data: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                copyTitle: 'Favourite Voices'
            }
        }   
    }
</script>

<style lang="scss" scoped>
.voices-favourite {
    margin-bottom: 20px;
}
</style>