<template>
  <b-nav-item-dropdown right no-caret>
    <template slot="button-content">
      <img src="~static/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com" />
    </template>
    <b-dropdown-header tag="div" class="text-center">
      <strong>Account</strong>
    </b-dropdown-header>
    <b-dropdown-item>
      <font-awesome-icon :icon="['fas', 'bell']" />Updates
      <b-badge variant="info">{{ itemsCount }}</b-badge>
    </b-dropdown-item>
    <b-dropdown-item>
      <font-awesome-icon :icon="['fas', 'envelope']" />Messages
      <b-badge variant="success">{{ itemsCount }}</b-badge>
    </b-dropdown-item>
    <b-dropdown-item>
      <font-awesome-icon icon="tasks" />Tasks
      <b-badge variant="danger">{{ itemsCount }}</b-badge>
    </b-dropdown-item>
    <b-dropdown-item>
      <font-awesome-icon :icon="['fas', 'comments']" />Comments
      <b-badge variant="warning">{{ itemsCount }}</b-badge>
    </b-dropdown-item>
    <b-dropdown-header tag="div" class="text-center">
      <strong>Settings</strong>
    </b-dropdown-header>
    <b-dropdown-item>
      <font-awesome-icon :icon="['fas', 'user']" />Profile
    </b-dropdown-item>
    <b-dropdown-item>
      <font-awesome-icon :icon="['fas', 'wrench']" />Settings
    </b-dropdown-item>
    <b-dropdown-item>
      <font-awesome-icon :icon="['fas', 'dollar-sign']" />Payments
      <b-badge variant="secondary">{{ itemsCount }}</b-badge>
    </b-dropdown-item>
    <b-dropdown-item>
      <font-awesome-icon :icon="['fas', 'file']" />Projects
      <b-badge variant="primary">{{ itemsCount }}</b-badge>
    </b-dropdown-item>
    <b-dropdown-divider />
    <b-dropdown-item>
      <font-awesome-icon :icon="['fas', 'shield-alt']" />Lock Account
    </b-dropdown-item>
    <b-dropdown-item @click="logout">
      <font-awesome-icon :icon="['fas', 'lock']" />Logout
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: 'HeaderDropdown',
  data: () => {
    return { itemsCount: 42 }
  },
  methods: {
    async logout() {
      try {
        this.$store.dispatch('logout').then(() => {
          this.$router.push('/pages/login')
        })
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>
