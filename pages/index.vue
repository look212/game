<template>
  <div class="container">
    <div class="contents">
      <h1>{{ mainInfo.title }}</h1>
      <div class="menu" v-if="gameType === null">
        <g-button v-for="(option, index) in mainInfos"
                  v-if="option.type"
                  :key="`mainInfos_${index}`"
                  @click="setGameType(option.type)">{{ option.title }}</g-button>
      </div>
      <div class="description-wrap" v-html="mainInfo.description"/>
      <div class="btn-wrap"
           v-if="gameType !== null">
        <g-button :is-gray="true"
                  @click="setGameType(null)">뒤로</g-button>
        <g-button @click="setGameStart()">시작하기</g-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, useRouter } from '@nuxtjs/composition-api';
import { useGameStore } from '~/store';
import GButton from '~/components/_atoms/GButton.vue';
import { mainInfos } from '~/constants';

export default defineComponent({
  name: 'IndexPage',
  components: {
    GButton
  },
  setup(props, { root }) {
    const game = useGameStore();
    const gameType = computed(() => game.gameType);
    const mainInfo = computed(() => game.mainInfo);
    const router = useRouter();

    const methods = {
      async setGameType(type: string) {
        if (type === 'listen' || type === 'look') {
          root.$swal('준비중 입니다.');
          return false;
        }
        await game.setGameType(type);
        await game.setMainInfo(type);
      },
      async setGameStart() {
        await router.push(`/detail/${gameType.value}`);
      }
    }

    return {
      gameType,
      mainInfo,
      mainInfos,
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
