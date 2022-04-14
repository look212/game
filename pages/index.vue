<template>
  <div class="container">
    <ul class="menu">
      <li @click="setGameType(0)">홈</li>
      <li @click="setGameType(1)">이어말하기</li>
      <li @click="setGameType(2)">몸으로 말해요</li>
      <li @click="setGameType(3)">라이어게임</li>
      <li @click="setGameType(4)">맞추기</li>
    </ul>
    <div class="contents">
      <h1>{{ mainInfo.title }}</h1>
      <div v-html="mainInfo.description"/>
      <div class="btn-wrap">
        <g-button v-if="gameType !==  null && gameType !==  0">시작하기</g-button>
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
      setGameType(type: number) {
        game.setGameType(type);
        game.setMainInfo(type);
        // methods.setTitle(type);
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

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 150px auto;
}
.menu {
  position: sticky;
  display: inline-block;
  width: 150px;
  height: calc(100vh);
  box-sizing: border-box;
  border-right: 1px solid #ddd;
  padding: 20px;

  li {
    line-height: 2em;
  }
}
h1 {
  line-height: 1.2em;
  word-break: keep-all;
}
.contents {
  padding: 20px;

  div {
    margin-top: 50px;
    line-height: 1.5em;
  }
}
</style>
