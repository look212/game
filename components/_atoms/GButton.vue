<template>
  <button :class="{'is-block': isBlock}" @click="handleClick">
    <slot/>
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  name: 'GButton',
  props: {
    isBlock: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { emit }) {
    const methods = {
      handleClick(e: Event) {
        emit('click', e);
      }
    }

    return {
      ...methods
    }
  }
})
</script>

<style lang="scss" scoped>
button {
  height: 40px;
  line-height: 40px;
  background-color: #000;
  border-radius: 20px;
  text-align: center;
  padding: 0 20px;
  box-sizing: border-box;
  color: #fff;
  font-weight: bold;
  font-size: 1.2em;

  &.is-block {
    display: block;
    width: 100%;
  }
}
</style>
