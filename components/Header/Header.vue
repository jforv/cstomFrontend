<template>
  <header class="app-header navbar">
    <button
      class="navbar-toggler mobile-sidebar-toggler d-lg-none"
      type="button"
      @click="mobileSidebarToggle"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <b-link class="navbar-brand" to="/" />
    <button
      class="navbar-toggler sidebar-toggler d-md-down-none"
      type="button"
      @click="sidebarToggle"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <!-- <b-navbar-nav class="d-md-down-none">
      <b-nav-item class="px-3" to="/users/login">Login</b-nav-item>
      <b-nav-item class="px-3" to="/users/register">Register</b-nav-item>
      <b-nav-item class="px-3" to="/settings">Settings</b-nav-item>
    </b-navbar-nav>-->
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown right v-if="isAuthenticated">
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>{{ loggedInUser.username }}</em>
        </template>
        <b-dropdown-item href="/users/profile">Profile</b-dropdown-item>
        <b-dropdown-item @click="logout">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
      <!-- <b-dropdown id="dropdown-1" class="m-md-2" v-if="isAuthenticated">
        <template v-slot:button-content>{{ loggedInUser.username }}</template>
        <b-dropdown-item>
          <b-nav-item class="px-3" to="/users/profile">My Account</b-nav-item>
        </b-dropdown-item>
        <b-nav-item class="px-3" @click="logout">Logout</b-nav-item>
      </b-dropdown>-->
      <b-nav-item v-else to="/users/login">Login</b-nav-item>
      <b-nav-item class="d-md-down-none">
        <i class="icon-bell" />
        <b-badge pill variant="danger">5</b-badge>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <i class="icon-list" />
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <i class="icon-location-pin" />
      </b-nav-item>
      <HeaderDropdown />
    </b-navbar-nav>
    <button
      class="navbar-toggler aside-menu-toggler aside-menu-show"
      type="button"
      data-toggle="aside-menu-show"
      @click="asideToggle"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- <button
      class="navbar-toggler aside-menu-toggler d-md-down-none"
      type="button"
      :class="fixed"
      @click="asideToggle"
    >
      <span class="navbar-toggler-icon" />
    </button>-->
    <!-- <button
      class="navbar-toggler aside-menu-toggler d-md-down-none"
      type="button"
      :class="fixed"
      @click="asideToggle"
    >
      <span class="navbar-toggler-icon" />
    </button>-->
  </header>
</template>

<script>
import HeaderDropdown from './HeaderDropdown.vue'
import { mapGetters } from 'vuex'
import {
  asideMenuCssClasses,
  validBreakpoints,
  checkBreakpoint
} from '@/utils/classes'
import { toggleClasses } from '@/utils/toggleClasses'

export default {
  name: 'CHeader',
  components: {
    HeaderDropdown
  },
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    defaultOpen: {
      type: Boolean,
      default: false
    },
    display: {
      type: String,
      default: 'lg'
    },
    mobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    // goHidden() {
    //   console.log('going underground')
    //   document.body.classList.toggle('aside-menu-hidden')
    // },
    classList() {
      return ['navbar-toggler']
    }
    // isAuthenticated(){
    //   return false
    // }
  },
  mounted: function() {
    this.toggle(this.defaultOpen)
    this.isFixed(this.fixed)
    // console.log(document.body.classList)
    // console.log(mapGetters(['isAuthenticated','loggedInUser']))
  },
  methods: {
    isFixed(fixed) {
      fixed
        ? document.body.classList.add('header-fixed')
        : document.body.classList.remove('header-fixed')
      return fixed
    },
    async logout() {
      await this.$auth.logout()
    },
    sidebarToggle(e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize(e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle(e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    toggle(force) {
      const [display, mobile] = [this.display, this.mobile]
      let cssClass = asideMenuCssClasses[0]
      console.log(cssClass)
      console.log(display)
      toggleClasses(cssClass, asideMenuCssClasses, force)

      if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
        cssClass = `aside-menu-${display}-show`
        console.log('toggled and passed the if')
        console.log(cssClass, asideMenuCssClasses, force)
      }
    },
    asideToggle(e) {
      e.preventDefault()
      // console.log(e)
      // document.body.classList.toggle('aside-menu-hidden'),
      this.toggle()
    }
  }
  // asideToggle(e) {
  //   // e.preventDefault()
  //   console.log(document.body.classList)
  //   document.body.classList.toggle('aside-menu-hidden')
  // }
  // }
}
</script>
