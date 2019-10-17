<template>
    <div>
        Hello {{ username}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                username: this.$route.name
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>