<template>
  <div class="game-in" v-if="gameList.length > 1">
    <div class="info">
      <p>{{ subject.label }} ({{ activeIndex + 1 }}/{{ questionCount }})</p>
    </div>
    <div class="question-wrap">
      <g-timer ref="timer" class="timer"></g-timer>
      <swiper ref="swiper" class="custom" :options="swiperOptions">
        <swiper-slide v-for="(game, index) in gameList" :key="`game_${index}`">
          <p v-if="isTimerStart">
            {{ subject.value === 'proverb' ? game.masking : game.value.slice(0, 2) }}
          </p>
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
    name: 'ComponentComplete',
    components: {
      GButton,
      GTimer,
    },
    setup(props, { root }) {
      const {
        swiper,
        timer,
        game,
        gameType,
        subject,
        countSpeed,
        countDown,
        questionCount,
        gameList,
        swiperOptions,
        isTimerStart,
        activeIndex,
        nextSlide,
        setCountSpeed,
        setCountDown,
      } = gameSetting()

      const data = reactive({})

      onMounted(() => {
        setTimeout(() => {
          setCountSpeed(countSpeed.value)
        })
      })

      const methods = {
        setGameStart() {
          if (isTimerStart.value) return false
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
                setCountSpeed(countSpeed.value)
                setCountDown(countDown.value)
              }
            })
        },
        goHome() {
          if (isTimerStart.value) return false
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
        countSpeed,
        countDown,
        questionCount,
        gameList,
        swiperOptions,
        isTimerStart,
        activeIndex,
        timer,
        setCountSpeed,
        nextSlide,
        setCountDown,
        ...methods,
        ...toRefs(data),
      }
    },
  })
</script>

<style lang="scss" scoped></style>
