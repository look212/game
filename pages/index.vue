<template>
  <div class="container">
    <div class="contents">
      <h1>{{ mainInfo.title }}</h1>
      <div class="menu" v-if="gameType === null">
        <g-button @click="setGameType('talk')">이어말하기</g-button>
        <g-button @click="setGameType('body')">몸으로 말해요</g-button>
        <g-button @click="setGameType('liar')">라이어게임</g-button>
        <g-button @click="setGameType('fit')">맞추기</g-button>
      </div>
      <div class="description-wrap" v-html="mainInfo.description"/>
      <div class="btn-wrap"
           v-if="gameType !== null">
        <g-button :is-gray="true"
                  @click="setGameType(null)">뒤로</g-button>
        <g-button @click="$router.push(`/detail/${gameType}`)">시작하기</g-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, toRefs, onMounted } from '@nuxtjs/composition-api';
import { useGameStore } from '~/store';
import GButton from '~/components/_atoms/GButton.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    GButton
  },
  setup() {
    const game = useGameStore();
    const gameType = computed(() => game.gameType);
    const mainInfo = computed(() => game.mainInfo);

    const methods = {
      setGameType(type: string) {
        game.setGameType(type);
        game.setMainInfo(type);
      },
    }

    return {
      gameType,
      mainInfo,
      ...methods
    }
  }
})
</script>

<style lang="scss" scoped>
h1 {
  line-height: 1.2em;
  word-break: keep-all;
}
.menu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
.contents {
  padding: 20px;

  > div {
    margin-top: 50px;
  }
}
</style>
