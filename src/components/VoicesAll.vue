<template>
    <div class="voices-all">
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
                copyTitle: 'Pro Voices'
            }
        }, 
    }
</script>
