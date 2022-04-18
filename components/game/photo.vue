<template>
  <div class="game-in" v-if="gameList.length > 1">
    <div class="info">
      <p>{{ activeIndex + 1 }}/{{ questionCount }}</p>
    </div>
    <div class="question-wrap">
      <g-timer ref="timer" class="timer"></g-timer>
      <swiper ref="swiper"
              class="custom"
              :options="swiperOptions">
        <swiper-slide v-for="(game, index) in googleImages" :key="`game_${index}`">
          <p v-if="isTimerStart">
            <img :src="game">
          </p>
        </swiper-slide>
        <div class="next-wrap" v-if="gameList.length !== (activeIndex + 1)">
          <g-button @click="nextSlide">다음</g-button>
        </div>
      </swiper>
      <div class="btn-wrap" v-if="gameList.length === (activeIndex + 1)">
        <g-button :is-gray="true" @click="goHome">처음으로</g-button>
        <g-button @click="setGameStart">이어서 게임 시작하기</g-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, ref } from '@nuxtjs/composition-api';
import gameSetting from '~/composable/gameSetting';
import GButton from '~/components/_atoms/GButton.vue';
import GTimer from '~/components/_atoms/GTimer.vue';

export default defineComponent({
  name: 'ComponentPhoto',
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
      googleImages,
      nextSlide,
      setCountSpeed,
      setCountDown,
    } = gameSetting();

    const data = reactive({

    })

    onMounted(() => {

      setTimeout(() => {
        setCountDown(1);
        setCountSpeed(100000);
        // game.setGoogleImages(null);
        // game.getGoogleImageSearch(gameList.value[0].name);
        try {
          game.getKakaoImageSearch(gameList.value[0].name);
        } catch (e) {

        }
      })

    })

    const methods = {
      setGameStart() {
        if (isTimerStart.value) return false;
        root.$swal({
          showCancelButton: true,
          customClass: {
            container: 'modal_container is_cancelBtn',
          },
          confirmButtonText: '예',
          title: 'Next Game Start 👉',
        }).then((result) => {
          if (result.isConfirmed) {
            game.setGameStart({ subject: subject.value.value, questionCount: questionCount.value });
            swiper.value.$swiper.slideTo(0);
            setCountDown(1);
            setCountSpeed(100000);
          }
        });
      },
      goHome() {
        if (isTimerStart.value) return false;
        root.$swal({
          showCancelButton: true,
          customClass: {
            container: 'modal_container is_cancelBtn',
          },
          confirmButtonText: '예',
          title: '처음으로 이동하시겠습니까?',
        }).then((result) => {
          if (result.isConfirmed) window.location.href = '/game';
        });
      }
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
      googleImages,
      setCountSpeed,
      nextSlide,
      setCountDown,
      ...methods,
      ...toRefs(data),
    }
  }
})
</script>

<style lang="scss" scoped>
.info p{
  line-height: 1.2em;
  color: #999;
}
.btn-wrap {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 20px 20px calc(#{$safeBottomHeight} + 20px);
  z-index: 1;
  display: flex;
  button {
    + button {
      margin-left: 10px;
    }
  }
}
</style>
