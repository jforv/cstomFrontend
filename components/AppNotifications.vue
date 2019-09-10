<template>
  <b-alert :show="_showDismissibleAlert" :variant="variant" dismissible>{{ message }}</b-alert>
</template>
<script>
export default {
  props: {
    message: {
      text: String,
      required: true,
      default: 'Errors Occured'
    },
    variant: {
      type: String,
      default: 'danger'
    },
    _showDismissibleAlert: {
      type: Boolean,
      default: true
    }
  }
  // data: () => ({
  //   _showDismissibleAlert: false
  // })
}
</script>