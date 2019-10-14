<template>
  <div>index Doctors{{ route}}</div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    route: ''
  }),
  mounted: {
    getRoute({ params }) {
      // console.log(this.$route + 'la ruta')
      // this.route = params.route
    }
  }
}
</script>

<style>
</style>
