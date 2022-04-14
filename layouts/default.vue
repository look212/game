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
    padding: $safeTopHeight $safeRightHeight $safeBottomHeight $safeLeftHeight
  }
</style>
