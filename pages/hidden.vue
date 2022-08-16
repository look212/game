<template>
  <div class="detail-wrap">
    <header>
      <a href="/game" class="btn__home">home</a>
      <h1>Only for you!</h1>
    </header>
    <div class="contents">
      <div class="menu">
        <g-button v-for="(option, index) in hiddenList"
                  v-if="option.type"
                  :key="`mainInfos_${index}`"
                  @click="setGameType(option.type)">{{ option.label }}</g-button>
      </div>
      <div class="description-wrap">
        <ul>
          <li>오직 당신들을 위한 게임입니다.</li>
          <li>파트너와 출제자는 정해져있어요.(출제자: 이름!)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, useRouter } from '@nuxtjs/composition-api';
import { hiddenList } from '~/dummy/data';
import { useGameStore } from '~/store';
import GButton from '~/components/_atoms/GButton.vue';

export default defineComponent({
  name: 'Hidden',
  components: {
    GButton
  },
  setup(props, { root }){
    const game = useGameStore();
    const gameType = computed(() => game.gameType);
    const router = useRouter();

    const methods = {
      async setGameType(type: string) {
        console.log(type)
        root.$swal('Game Start 😆').then(() => {
          router.push(`/detail/hidden`);
          game.setHiddenType(type);
        });
      },
    }
    return {
      gameType,
      hiddenList,
      ...methods,
    }
  },
})
</script>

<style lang="scss" scoped>
header {
  position: relative;
  .btn__home {
    position: absolute;
    top: 50%;
    left: 0;
    @include transform(translateY(-50%));
    width: 38px; height: 38px;
    background: $ic-30-common-arrow-left center no-repeat;
    text-indent: -9999em;
    overflow: hidden;
  }
}
.description-wrap {
  margin-top: 50px;
}
.menu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  button {
    margin: 0;
  }
}
</style>
