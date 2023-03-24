<template>
  <div class="game-in" v-if="gameList.length > 1">
    <div class="info">
      <p>{{ subject.label }} ({{ activeIndex + 1 }}/{{ questionCount }})</p>
    </div>
    <div class="question-wrap" @click="setIsShow(!isShow)">
      <swiper ref="swiper" class="custom" :options="swiperOptions">
        <swiper-slide v-for="(game, index) in gameList" :key="`game_${index}`">
          <div v-if="index === activeIndex">
            <p>{{ game.value }}</p>
            <div class="txt">
              <div :class="{ 'is-active': !isShow }">
                {{ game.label }}
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="next-wrap" v-if="gameList.length !== activeIndex + 1">
          <g-button @click="nextSlide">다음</g-button>
        </div>
      </swiper>
      <div class="btn-wrap" v-if="gameList.length === activeIndex + 1">
        <g-button :is-gray="true" @click="goHome">처음으로</g-button>
        <g-button @click="setGameStart">이어서 게임 시작하기</g-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, onMounted, ref } from '@nuxtjs/composition-api'
  import gameSetting from '~/composable/gameSetting'
  import GButton from '~/components/_atoms/GButton.vue'
  import GTimer from '~/components/_atoms/GTimer.vue'

  export default defineComponent({
    name: 'ComponentChosung',
    components: {
      GButton,
      GTimer,
    },
    setup(props, { root }) {
      const {
        swiper,
        game,
        gameType,
        subject,
        questionCount,
        gameList,
        swiperOptions,
        activeIndex,
        isShow,
        nextSlide,
        setIsShow,
      } = gameSetting()

      const methods = {
        setGameStart() {
          root
            .$swal({
              showCancelButton: true,
              customClass: {
                container: 'modal_container is_cancelBtn',
              },
              confirmButtonText: '예',
              title: 'Next Game Start 👉',
            })
            .then((result) => {
              if (result.isConfirmed) {
                game.setGameStart({
                  subject: subject.value.value,
                  questionCount: questionCount.value,
                })
                activeIndex.value = 0
                swiper.value.$swiper.slideTo(0)
              }
            })
        },
        goHome() {
          root
            .$swal({
              showCancelButton: true,
              customClass: {
                container: 'modal_container is_cancelBtn',
              },
              confirmButtonText: '예',
              title: '처음으로 이동하시겠습니까?',
            })
            .then((result) => {
              if (result.isConfirmed) window.location.href = '/game'
            })
        },
      }

      return {
        swiper,
        gameType,
        subject,
        questionCount,
        gameList,
        swiperOptions,
        activeIndex,
        isShow,
        nextSlide,
        setIsShow,
        ...methods,
      }
    },
  })
</script>

<style lang="scss" scoped>
  .txt {
    position: relative;
    font-size: 1.5em;
    width: 100%;
    min-width: 50vw;
    height: 100%;
    margin-top: 20px;

    > div {
      line-height: 1.2em;
      color: $Gray00;
      position: relative;
      width: 100%;

      &::before {
        content: '클릭하여 정답 확인';
        color: $Gray60;
        position: absolute;
        left: 50%;
        top: 0;
        width: 100%;
        @include transform(translateX(-50%));
      }
      i {
        display: block;
        margin-top: 16px;
        opacity: 0.4;
        font-size: 0.8em;
      }

      &.is-active {
        color: $Gray90;
        &::before {
          content: '';
        }
      }
    }
  }
</style>
