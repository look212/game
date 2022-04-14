<template>
  <div v-show="isTimerStart" class="timer-wrap">
    <p>
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
      countDown() {
        if (data.timer > 0) {
          game.setStartTimer(true);
          data.isOver = false;
          setTimeout(() => {
            data.timer -= 1
            methods.countDown();
          }, props.delay)
        } else {
          data.isOver = true;
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
  height: 200px;
  align-items: center;
  justify-content: center;
  p {
    font-size: 5em;
  }
}
</style>
