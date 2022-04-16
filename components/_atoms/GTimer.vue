<template>
  <div v-if="isTimerStart" class="timer-wrap">
    <p :class="{'is-active': isTimerStart}">
      {{ initialCount }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, computed, watch } from '@nuxtjs/composition-api';
import { useGameStore } from '~/store';
export default defineComponent({
  name: 'GTimer',
  setup() {
    const data = reactive({
      initialCount: 0,
      isOver: false,
    });
    const game = useGameStore();
    const isTimerStart = computed(() => game.isTimerStart);
    const countDown = computed(() => game.countDown);

    onMounted(() => {
      data.initialCount = countDown.value;
    });

    watch(() => countDown.value, (newValue: number) => {
      data.initialCount = countDown.value;
    })

    const methods = {
      countDown(speed: number) {
        if (data.initialCount > 0) {
          game.setStartTimer(true);
          setTimeout(() => {
            data.initialCount -= 1
            methods.countDown(speed);
          }, speed)
        } else {
          game.setStartTimer(false);
          data.initialCount = countDown.value;
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
