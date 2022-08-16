<template>
  <div class="game-in" v-if="gameList.length > 1">
    <div class="info">
      <p>{{ activeIndex + 1 }}/{{ questionCount }}</p>
    </div>
    <div class="question-wrap" @click="setIsShow(!isShow)">
      <g-timer ref="timer" class="timer"></g-timer>
      <swiper ref="swiper"
              class="custom"
              :options="swiperOptions">
        <swiper-slide v-for="(game, index) in gameList" :key="`game_${index}`">
          <div v-if="isTimerStart">
            <img :src="game.url" v-if="index === activeIndex" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
          <div v-else class="txt">
            <div :class="[{'is-active': !isShow}, {'is-loading': isTimerStart}]">
              {{ game.value }}
            </div>
          </div>
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
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api';
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
      giParams,
      isShow,
      nextSlide,
      setCountSpeed,
      setCountDown,
      setIsShow,
    } = gameSetting();
    // const isShow = ref(true);

    onMounted(() => {
      setTimeout(async () => {
        await setCountDown(1);
        await setCountSpeed(2000);
        // await setGoogleImage(gameList.value[0].value);
      });
    });

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
        }).then(async (result) => {
          if (result.isConfirmed) {
            await game.setGameStart({ subject: 'photo', questionCount: questionCount.value });
            isTimerStart.value = true;
            activeIndex.value = 0;
            // await setGoogleImage(gameList.value[activeIndex.value].name);
            await swiper.value.$swiper.slideTo(0);
            isShow.value = true;
            await setCountDown(1);
            await setCountSpeed(2000);
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
      giParams,
      isShow,
      setCountSpeed,
      nextSlide,
      setCountDown,
      setIsShow,
      ...methods,
    }
  }
})
</script>

<style lang="scss" scoped>
.swiper-slide {
  img {
    max-width: 90vw;
  }
  .txt {
    position: relative;
    font-size: 8vw;
    width: 100%;
    height: 100%;

    > div {
      position: absolute;
      left: 50%;
      top: 50%;
      @include transform(translate(-50%, -50%));
      height: max-content;
      color: $Gray00;
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

      &.is-active {
        color: $Gray90;
        &::before {
          content: '';
        }
      }
      &.is-loading {
        color: $Gray00;
        &::before {
          content: '';
        }
      }
    }
  }
}
</style>
