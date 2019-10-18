<template>
  <div>
    <Aside v-if="showAside" @clicked2Show="makeShowAside"/>
    <doctor-table/>
  </div>
</template>

<script>
import doctorTable from '~/components/tables'
import {Aside as AppAside} from '~/components/'
export default {
  name: 'index',
  data:()=>({
    showAside: true
  }),
  components:{
    doctorTable,
    AppAside
  },
  methods:{
    makeShowAside(){
      console.log('make it shows')
      this.showAside = !this.showAside
    }
  }
}
</script>

<style>
</style>
