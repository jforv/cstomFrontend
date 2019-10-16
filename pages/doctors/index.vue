<template>
  <div>index Doctors{{ route}}</div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    route: ''
  }),
  created() {
    // getRoute({ params }) {
    console.log(this.$route)
    // this.route = params.route
    // }
  }
}
</script>

<style>
</style>
