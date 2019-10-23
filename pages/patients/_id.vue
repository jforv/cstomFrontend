<template>
<b-row>
    <b-col lg="4" class="test">
        <profileAside fixed/>
    </b-col>
    <b-col lg="8">
    <div>
        Hello {{ username}} {{id}}
    </div>

    </b-col>
</b-row>
</template>

<script>
import {Aside as profileAside} from '~/components/'
    export default {
        components:{
            profileAside
        },
        data(){
            return {
                username: this.$route.params.id
            }
        },
        created(){
            // console.log(this.$route)
        }
    }
</script>

<style lang="scss" scoped>
.test{
    background-color: red;
}
</style>