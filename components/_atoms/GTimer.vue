<template>
  <div v-if="timer !== 0" class="timer-wrap">
    <p>
      {{ timer }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from '@nuxtjs/composition-api';
export default defineComponent({
  name: 'GTimer',
  props: {
    time: {
      type: Number,
      default: 3,
    }
  },
  setup(props) {
    const data = reactive({
      timer: 0,
      isOver: false,
    });

    onMounted(() => {
      data.timer = props.time;
      methods.countDown();
    });

    const methods = {
      countDown() {
        if (data.timer > 0) {
          data.isOver = false;
          setTimeout(() => {
            data.timer -= 1
            methods.countDown();
          }, 1000)
        } else {
          data.isOver = true;
        }
      }
    }

    return {
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
