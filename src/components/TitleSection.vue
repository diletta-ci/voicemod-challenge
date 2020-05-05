<template>
    <div class="title-section">
        <div class="title-text">
            <h1>
                {{ titleText }}
            </h1>
        </div>
        <div class="title-line" />
    </div>
</template>

<script>
    export default {
        props: {
            titleText: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
@import './../scss/partials/_vars.scss';

.title-section {
    text-transform: uppercase;
    color: $title-primary;
    position: relative;
    margin-bottom: 20px;

    &::after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: $background-secondary;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .title-text {
        width: fit-content;
        background-color: $background-primary;
        padding: 10px;
        position: relative;
        z-index: 1;
    }
}
</style>