<template>
  <div class="detail-wrap">
    <header>
      <a href="/game" class="btn__home">home</a>
      <h1>BINGO</h1>
    </header>
    <div class="bingo-wrap">
      <div
        class="bingo-item"
        :class="{ 'is-active': data.is_checked === true }"
        v-for="(data, index) in bingoArray"
        @click="check(index)"
      >
        {{ data.num }}
      </div>
    </div>
    <div class="btn-wrap">
      <g-button :is-gray="true" @click="deSelect">모든 숫자 선택 취소</g-button>
      <g-button @click="newGame">New Bingo</g-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'
  import { getRandomArray } from '~/utils/utils'
  import GButton from '~/components/_atoms/GButton.vue'
  export default defineComponent({
    name: 'bingo',
    components: {
      GButton,
    },

    setup() {
      let bingoArray = ref<any>([])

      onMounted(() => {
        methods.newGame()
      })

      const methods = {
        check(index: number) {
          console.log(index)
          console.log(bingoArray.value[index].is_checked)
          bingoArray.value[index].is_checked = !bingoArray.value[index].is_checked
        },
        newGame() {
          const arr = getRandomArray(1, 26, 25)
          bingoArray.value = arr?.map((num: number) => {
            return {
              num: num,
              is_checked: false,
            }
          })
        },
        deSelect() {
          bingoArray.value.forEach(
            (num: { num: number; is_checked: boolean }) => (num.is_checked = false),
          )
        },
      }

      return {
        bingoArray,
        ...methods,
      }
    },
  })
</script>

<style lang="scss" scoped>
  .bingo-wrap {
    width: 90vw;
    margin: 50px auto 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    box-sizing: border-box;
    border-top: 1px solid $Gray30;
    border-left: 1px solid $Gray30;

    .bingo-item {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid $Gray30;
      border-bottom: 1px solid $Gray30;

      &.is-active {
        background: $Gray90;
        color: $Gray00;
      }
    }
  }

  .btn-wrap {
    margin-top: 50px;
    text-align: center;
  }
</style>
