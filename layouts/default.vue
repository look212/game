<template>
  <div id="app" class="gcse-search">
    <nuxt />
  </div>
</template>

<script async src="https://cse.google.com/cse.js?cx=1ed3b086a03fc3e3e"></script>
<div class="gcse-search"></div>
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
