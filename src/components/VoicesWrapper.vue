<template>
    <transition-group 
        name="voice"
        tag="div" 
        class="voices-wrapper"
    >
        <voice 
            v-for="(voice, index) in voicesList"
            :key="voice.id"
            :voice-data="voice"
            :voice-index="index"
        />
    </transition-group>
</template>

<script>
    import Voice from './Voice.vue';

    export default {
        components: {
            Voice,
        },
        props: {
            voicesList: {
                type: Array,
                required: true
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.voices-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    .voice-move {
        transition: all 1s cubic-bezier(0.86, 0, 0.07, 1);
    }

    &:after {
        content: '';
        flex: auto;
    }
}
</style>