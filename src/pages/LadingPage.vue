<template>
    <div class="landing-page">
        <menu-top 
            :data="voicesList" 
            @categorySelection="_ => category = _"
            @sortSelection="_ => sortSelect = _"
        />
        <div class="voices-wrapper">
            <voices-favourite 
                :data="getStoreVoicesFavourite" 
                v-if="getStoreVoicesFavourite.length > 0" 
            />
            <voices-all :data="searchVoicesList" />
        </div>
    </div>
</template>

<script>
    import data from './../../data/voices.json';

    import MenuTop from './../components/MenuTop.vue';
    import VoicesFavourite from './../components/VoicesFavourite.vue';
    import VoicesAll from './../components/VoicesAll.vue';

    export default {
        dataJSON: data,
        components: {
            MenuTop,
            VoicesFavourite,
            VoicesAll,
        },
        data () {
            return {
                category: 'All',
                sortSelect: 'Popular'
            }
        },
        computed: {
            voicesList() {
                return this.$options.dataJSON;
            },
            getStoreVoicesFavourite() {
                return this.$store.state.voicesFavorite; 
            },
            getSearchInput() {
                return this.$store.state.search;
            },
            categoryList() {
                if (this.category === 'All') {
                    return this.voicesList;
                }                
                
                return this.voicesList.filter(_ => _.tags.includes(this.category));
            },
            sortList() {
                if (this.sortSelect === 'Popular') {
                    return this.categoryList;
                }
                
                const list = Array.from(this.categoryList);

                const sort = list.sort((a,b) => {
                    return a.name.localeCompare(b.name);
                });
                
                return this.sortSelect === 'Ascending' ? sort : sort.reverse();
            },
            searchVoicesList() {
                return this.sortList.filter(_ => _.name.toLowerCase().includes(this.getSearchInput));
            }
        },
    }
</script>

<style lang="scss" scoped>
@import './../scss/partials/_mixins.scss';

.landing-page {
    .voices-wrapper {
        width: 80%;
        margin: 0 auto;
        height: 100vh;
        margin-top: 60px;

        @include tablet {
            margin-top: 220px;
        }
    }
}
</style>