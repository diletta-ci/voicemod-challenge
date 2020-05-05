<template>
    <div class="voice">
        <div 
            class="voice-icon"
            :class="{ 'voice-selected': isVoiceSelected }"
            :id="voiceData.id"
            @click="selectVoice()"
        >
            <icon :icon-path="voiceData.icon"/>
        </div>

        <div class="voice-name">
            <p>{{ voiceData.name }}</p>
        </div>

        <div 
            class="voice-like"
            @click="toggleFavourite()"
        >
            <icon :icon-path="isFavourite" />
        </div>

    </div>
</template>

<script>
    import Icon from './Icon.vue';
    
    export default {
        components: {
            Icon,
        },
        props: {
            voiceData: {
                type: Object,
                default: {}
            },
        },
        computed: {
            favouriteList() {
                return this.$store.state.voicesFavorite;
            },
            isVoiceFavourite() {
                return this.favouriteList.filter(_ => _.id === this.voiceData.id)[0];
            },
            isFavourite() {
                return this.isVoiceFavourite ? 'voice-favourite.svg' : 'voice-favourite-off.svg';
            },
            getVoiceSelected() {
                return this.$store.state.voiceSelected;
            },
            isVoiceSelected() {
                return this.getVoiceSelected === this.voiceData.id;
            }
        },
        methods: {
            toggleFavourite() {
                this.$store.commit('toggleFavoriteList', this.voiceData);

                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            },
            selectVoice() {
                this.$store.commit('selectVoice', this.voiceData.id);
            }
        },
    }
</script>

<style lang="scss" scoped>
@import './../scss/partials/_vars.scss';

.voice {
    position: relative;
    width: 140px;
    height: 140px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 10px;

    .voice-icon {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: $background-secondary;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        &.voice-selected {
            background: rgb(0,227,255);
            background: radial-gradient(circle, rgba(0,227,255,1) 35%, rgba(0,187,255,1) 100%);
        }

        &:hover {
            background-color: white;
        }
        
    }

    .voice-like {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 20px;
        width: 25px;
        height: 25px;
        background-color: white;
        border-radius: 50%;
        display: none;
        cursor: pointer;
    }

    &:hover {
        .voice-like {
            display: inherit;
        }
    }
    
}
</style>