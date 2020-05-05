<template>
    <div class="menu">
        <div class="menu-section menu-search">
            <icon icon-path="search.svg" />
            <input 
                type="text" 
                name="search" 
                id="search"
                @input="search"
            >
        </div>

        <div class="menu-section menu-filter">
            <icon icon-path="filter.svg" />
            <dropdown 
                type="category"
                :options="categoryOptions" 
                @dropdownSelection="_ => $emit('categorySelection', _)"
            />
        </div>

        <div class="menu-section menu-sort">
            <icon icon-path="order.svg" />
            <dropdown 
                type="sort"
                :options="menuSort" 
                @dropdownSelection="_ => $emit('sortSelection', _)"
            />
        </div>
        
        <div 
            class="menu-section menu-random"
            @click="selectRandomVoice()"
        >
            <icon icon-path="button-random.svg" />
        </div>
    </div>
</template>

<script>
    import Dropdown from './Dropdown.vue';
    import Icon from './Icon.vue';

    export default {
        components: {
            Dropdown,
            Icon,
        },
        props: {
            data: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                topSpace: 100,
                menuSort: ['Popular', 'Ascending', 'Descending'],
            }
        },
        computed: {
            categoryOptions() {
                const categories = ['All'];

                this.data.forEach(voice => {
                    voice.tags.forEach(tag => {
                        if (!categories.includes(tag)) {
                            categories.push(tag);
                        }
                    });
                });

                return categories;
            },
        },
        methods: {
            selectRandomVoice() {
                const random = Math.floor(Math.random() * this.data.length);
                const { id } = this.data[random];
                const voiceElement = document.getElementById(id);
                
                this.$store.commit('selectVoice', id);

                window.scrollTo({
                    top: (voiceElement.getBoundingClientRect().top - this.topSpace),
                    behavior: 'smooth',
                });
            },
            search(e) {
                this.$store.dispatch('updateSearch', e.target.value);
            }
        }
    }
</script>

<style lang="scss" scoped>
@import './../scss/partials/_mixins.scss';
@import './../scss/partials/_vars.scss';

.menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    position: fixed;
    top: 0;
    padding: 20px;
    z-index: 2;
    background-color: $background-primary;
    
    .menu-section {
        display: flex;
        margin: 0 10px;

        @include tablet {
            margin: 10px 0;
        }
    }

    .menu-search {
        width: 220px;
        height: 30px;
        margin-right: auto;
        display: flex;
        border-radius: 8px;
        background-color: black;
        
        input {
            background-color: inherit;
            outline: none;
            border: none;
            font-size: 1.6rem;
        }

        @include tablet {
            margin: 0;
        }
    }

    .menu-random {
        cursor: pointer;
    }

    @include tablet {
        padding: 15px 20px;
        flex-direction: column;
        align-items: center;
    }
}

</style>
