<template>
  <div id="app">
    <nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  name: 'defaullt'
})
</script>

<style lang="scss" scoped>
  #app {
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }
</style>
