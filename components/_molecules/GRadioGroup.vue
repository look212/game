<template>
  <div>
    <g-radio
      v-for="(option, index) in options"
      :name="name"
      :key="`radio_${name}_${index}`"
      :label="option.label"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api'
  import GRadio from '~/components/_atoms/GRadio.vue'

  export default defineComponent({
    name: 'GRadioGroup',
    components: {
      GRadio,
    },
    props: {
      name: {
        type: String,
      },
      options: {
        type: Object,
      },
    },
  })
</script>

<style scoped></style>
