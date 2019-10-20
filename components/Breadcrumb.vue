<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item" :key="index" v-for="(routeObject, index) in routeRecords">
      <span class="active" v-if="isLast(index)"> {{ getName(routeObject) }}</span>
      <router-link :to="routeObject" v-else>{{ getName(routeObject) }}</router-link>
    </li>
  </ol>
</template>

<script>
import { log } from 'util'
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    routeRecords: function () {
      // console.log(this.list)
      console.log('asi es');
      
      return this.list.filter((route) => route.name || route.meta)
    }
  },
  methods: {
    getName (item) {
      console.log(item.meta);
      // return item.meta && item.meta.label ? item.meta.label : item.name || null
      return item.meta
      
    },
    isLast (index) {
      return index === this.list.length - 1
    }
  }
}
</script>