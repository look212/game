<template>
  <div>
    <header>
      <a href="/" class="btn__home">home</a>
      <h1>{{ mainInfo.title }}</h1>
    </header>
    <div>
      <g-timer></g-timer>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, useRoute } from '@nuxtjs/composition-api';
import { useGameStore } from '~/store';
import GTimer from '~/components/_atoms/GTimer.vue';

export default defineComponent({
  name: 'game',
  components: {
    GTimer,
  },
  setup() {
    const game = useGameStore();
    const gameType = computed(() => game.gameType);
    const mainInfo = computed(() => game.mainInfo);
    const route = useRoute();

    onMounted(() => {
      const type = Number(route.value.params.typeNum)
      game.setGameType(type);
      game.setMainInfo(type);
    });

    return {
      gameType,
      mainInfo,
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  text-align: center;
  background-color: #fff;
  position: relative;
  padding: 10px;

  h1 {
    font-size: 1.5em;
    font-weight: 400;
  }

  .btn__home {
    position: absolute;
    top: 50%;
    left: 10px;
    @include transform(translateY(-50%));
    width: 38px; height: 38px;
    background: $ic-30-common-arrow-left center no-repeat;
    text-indent: -9999em;
    overflow: hidden;
  }
}
</style>
