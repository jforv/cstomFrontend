<template>
  <div>
    Home sweet Home
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',
    router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'Dashboard',
        path: '/',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  }
    
  }
</script>

<style lang="scss" scoped>

</style>