<template>
  <div class="container">
    <div class="contents">
      <h1>{{ mainInfo.title }}</h1>
      <div class="menu" v-if="gameType === null">
        <g-button
          v-for="(option, index) in mainInfos"
          v-if="option.type"
          :key="`mainInfos_${index}`"
          @click="setGameType(option.type)"
          >{{ option.title }}</g-button
        >
      </div>
      <div class="description-wrap" v-html="mainInfo.description" />
      <div class="btn-wrap" v-if="gameType !== null">
        <g-button :is-gray="true" @click="setGameType(null)">뒤로</g-button>
        <g-button @click="setGameStart()">시작하기</g-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, useRouter } from '@nuxtjs/composition-api'
  import { useGameStore } from '~/store'
  import GButton from '~/components/_atoms/GButton.vue'
  import { mainInfos } from '~/constants'
  import _ from 'lodash'
  import { IMainInfo } from '~/types'

  export default defineComponent({
    name: 'IndexPage',
    components: {
      GButton,
    },
    setup() {
      const game = useGameStore()
      const userAgent = navigator.userAgent
      const isIOS = _.includes(userAgent, 'iPad') || _.includes(userAgent, 'iPhone')
      const router = useRouter()
      const getters = {
        mainInfo: computed(() => game.mainInfo),
        gameType: computed(() => game.gameType),
        mainInfos: computed(() => (isIOS ? methods.gameListFilter(mainInfos) : mainInfos)),
      }

      const methods = {
        async setGameType(type: string) {
          await game.setGameType(type)
          await game.setMainInfo(type)
        },
        async setGameStart() {
          await router.push(`/detail/${getters.gameType.value}`)
        },
        gameListFilter(gameList: IMainInfo[]) {
          return gameList.filter((game) => game.type !== 'mix')
        },
      }

      return {
        ...getters,
        ...methods,
      }
    },
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
