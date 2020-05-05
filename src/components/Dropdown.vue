<template>
    <div class="dropdown">
        <div 
            class="selection"
            @click="dropdownIsOpen = !dropdownIsOpen"
            :class="{ 'is-open': dropdownIsOpen }"
        >
            <div class="option-selected">
                <span>{{ optionSelected }}</span>
            </div>
            <icon 
                class="arrow"
                icon-path="select-arrow.svg" 
            />
        </div>

        <div 
            class="options"
            v-if="dropdownIsOpen"
        >
            <span
                v-for="(option, index) in options"
                :key="index"
                @click="selecOption(index)"
            >
                {{ option }}
            </span>    
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
            type: {
                type: String,
                defualt: ''
            },
            options: {
                type: Array,
                defualt: []
            }
        },
        data() {
            return {
                optionSelected: this.options[0],
                dropdownIsOpen: false,
            }
        },
        methods: {
            selecOption(option) {
                this.optionSelected = this.options[option];
                this.dropdownIsOpen = false;
                this.$emit('dropdownSelection', this.optionSelected)
            }
        },
        
    }
</script>

<style lang="scss" scoped>
@import './../scss/partials/_vars.scss';

.dropdown {
    width: 120px;
    height: 30px;
    background-color: black;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    position: relative;

    .selection {
        display: inherit;
        cursor: pointer;

        .option-selected {
            color: $title-primary;
            min-width: 85px;
            text-transform: capitalize;

            &:hover {
                color: white;
            }
        }

        .arrow {
            transition: all .2s linear;
        }
        
        &.is-open {
            .option-selected {
                color: white;
            }

            .arrow {
                transform: rotate(180deg);
            }
        }
    }


    .options {
        background-color: black;
        position: absolute;
        top: 22px;
        width: 100%;
        left: 0;
        padding: 10px;
        border-radius: 5px;
        line-height: 30px;
        color: $title-primary;
        display: flex;
        flex-direction: column;

        span {
            transition: all .2s linear;
            text-transform: capitalize;
        }

        span:hover {
            color: white;
            cursor: pointer;
        }
    }
}
</style>