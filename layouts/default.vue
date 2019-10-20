<template>
  <div class="app">
    <AppHeader fixed />
    <div class="app-body">
      <Sidebar 
        :nav-items="nav" 
        fixed />
      <main class="main">
        <!-- <breadcrumb :list="crumbs"/> -->
        <b-breadcrumb :items="crumbs"/>
        <div class="container-fluid">
          <nuxt />
        </div>
      </main>
      <AppAside fixed/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import nav from './menu'
import {
  Header as AppHeader,
  Sidebar,
  Aside as AppAside,
  Footer as AppFooter,
  Breadcrumb
} from '~/components/'

export default {
  name: 'Full',
  components: {
    AppHeader,
    Sidebar,
    AppAside,
    AppFooter,
    Breadcrumb
  },
  data() {
    return {
      nav: nav.items,
      // items: [
      //   {
      //     text: 'Home',
      //     href: '/'
      //   },
      //   {
      //     text: 'Patients',
      //     href: '/patients',
      //     active: true
      //   },
      //   {
      //     text: 'Library',
      //     active: true
      //   }
      // ]
    }
  },
  computed: {
    name() {
      // console.log(this.$route.path);
      
      return this.$route.name
    },
    list() {
      console.log(this.crumbs);
      // console.log(this.$route.matched[0]);
      
      return this.$route.matched
    },
     crumbs: function() {
      let pathArray = this.$route.path.split("/")
      
      pathArray.splice(0,1,'Home')
      // console.log(pathArray);
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        // console.log(breadcrumbArray);
        
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1]
            ? "/" + path
            : "/" ,
          text: path,
        });
        return breadcrumbArray;
      }, [])
        // console.log('this crumbs');
      
      return breadcrumbs;
    }
  }
}
</script>
