<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col lg="6">
        <c-table caption="<i class='fas fa-align-justify'></i> Simple Table"/>
      </b-col><!--/.col-->

      <b-col lg="6">
        <c-table 
          striped 
          caption="<i class='fas fa-align-justify'></i> Striped Table"/>
      </b-col><!--/.col-->
    </b-row><!--/.row-->

    <b-row>
      <b-col lg="6">
        <c-table 
          small 
          caption="<i class='fas fa-align-justify'></i> Condensed Table"/>
      </b-col><!--/.col-->

      <b-col lg="6">
        <c-table 
          fixed 
          bordered 
          caption="<i class='fas fa-align-justify'></i> Bordered Table"/>
      </b-col><!--/.col-->
    </b-row><!--/.row-->

    <b-row>
      <b-col sm="12">
        <c-table 
          hover 
          striped 
          bordered 
          small 
          fixed 
          caption="<i class='fas fa-align-justify'></i> Combined All Table"/>
      </b-col>
    </b-row>
  </div>

</template>

<script>
import cTable from './table.vue'

export default {
  name: 'Tables',
  components: { cTable }
}
</script>
