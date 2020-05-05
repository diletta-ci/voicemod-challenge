<template>
    <div class="icon">
        <img :src="`./../../static/img/${iconPath}`" :alt="iconPath.slice(0, -4)">
    </div>
</template>

<script>
    export default {
        props: {
            iconPath: {
                type: String,
                required: true
            }
        }
        
    }
</script>           

<style lang="scss" scoped>

.icon {
    margin: 0 5px;
}

</style>
