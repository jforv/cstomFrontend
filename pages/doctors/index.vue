<template>
  <div>index Doctors-{{ ruta}}</div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    ruta: 'Doctors'
  }),
  head: {
    title: 'Doctors'
  },
  created() {
    // getRoute({ params }) {
    // console.log(this.$route)
    this.ruta = this.$route.name
    // }
  }
}
</script>

<style>
</style>
