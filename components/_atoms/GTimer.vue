<template>
  <div v-if="isTimerStart" class="timer-wrap">
    <p :class="{'is-active': isTimerStart}">
      {{ timer }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, computed } from '@nuxtjs/composition-api';
import { useGameStore } from '~/store';
export default defineComponent({
  name: 'GTimer',
  props: {
    time: {
      type: Number,
      default: 3,
    },
    delay: {
      type: Number,
      default: 1000
    },
  },
  setup(props, { emit }) {
    const data = reactive({
      timer: 0,
      isOver: false,
    });
    const game = useGameStore();
    const isTimerStart = computed(() => game.isTimerStart);

    onMounted(() => {
      data.timer = props.time;
    });

    const methods = {
      countDown(delay: number) {
        if (data.timer > 0) {
          game.setStartTimer(true);
          setTimeout(() => {
            data.timer -= 1
            methods.countDown(delay);
          }, delay)
        } else {
          game.setStartTimer(false);
          data.timer = props.time;
        }
      },
    }

    return {
      isTimerStart,
      ...toRefs(data),
      ...methods
    }
  }
})
</script>

<style lang="scss" scoped>
.timer-wrap {
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  p {
    font-size: 5em;
    color: #fff;

    &.is-active {
      color: #ddd;
    }
  }
}
</style>
