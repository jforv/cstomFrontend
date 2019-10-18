<template>
  <div>
    <Aside v-if="showAside" @clicked2Show="makeShowAside"/>
    <patient-table/>
  </div>
</template>

<script>
import patientTable from '~/components/tables'
import {Aside as AppAside} from '~/components/'
export default {
  name: 'index',
  data:()=>({
    showAside: true
  }),
  components:{
    patientTable,
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
