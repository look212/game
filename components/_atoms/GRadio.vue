<template>
  <span>
    <label>
      <span>{{ label }}</span>
      <input type="radio" v-bind="$attrs" :name="name" :value="value" @change="handleInput" />
    </label>
  </span>
</template>

<script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api'
  export default defineComponent({
    name: 'GRadio',
    props: {
      name: {
        type: String,
      },
      label: {
        type: String || Number,
      },
      value: {
        type: String || Number,
      },
    },
    setup(props, { emit }) {
      const methods = {
        handleInput(e: Event) {
          const value = (e.target as HTMLInputElement).value
          emit('click', value)
        },
      }

      return {
        ...methods,
      }
    },
  })
</script>

<style scoped></style>
