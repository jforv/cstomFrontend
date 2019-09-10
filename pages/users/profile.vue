<template>
  <div class="content">
    <p>
      <strong>Username:</strong>
      {{ loggedInUser.username }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ loggedInUser.email }}
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  // middleware: 'auth',
  computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>