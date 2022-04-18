<template>
  <button :class="[{'is-block': isBlock},
      {'is-gray': isGray},
      {'is-active-action': isActiveAction}]"
          @click="handleClick"
          @ontouchstart="handleTouchStart"
          @ontouchend="handleTouchEnd">
    <slot/>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
export default defineComponent({
  name: 'GButton',
  props: {
    isBlock: {
      type: Boolean,
      default: false,
    },
    isGray: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const isActiveAction = ref<boolean>(false);
    const methods = {
      handleClick(e: Event) {
        emit('click', e);
      },
      handleTouchStart() {
        isActiveAction.value = true;
      },
      handleTouchEnd() {
        isActiveAction.value = false;
      }
    }

    return {
      isActiveAction,
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
  outline: none;

  &.is-block {
    display: block;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 30px;
  }
  &.is-gray {
    background: #f0f0f0;
    color: #000;
  }

  &.is-active-action {
    background-color: #ddd;

    &:active {
      background-color: #ddd;
    }
  }
}
</style>
