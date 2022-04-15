<template>
  <div v-if="gameList.length > 1">
    <div class="info">
      <p>{{ subject.label }} ({{ activeIndex + 1 }}/{{ questionCount }})</p>
    </div>
    <div class="question-wrap">
      <g-timer ref="timer" class="timer"></g-timer>
      <swiper ref="swiper"
              class="custom"
              :options="swiperOptions"
              @slideChange="slideChange">
        <swiper-slide v-for="(game, index) in gameList" :key="`game_${index}`">
          <p v-if="isTimerStart">{{ subject.value === 'proverb' ? game.masking : game.value.slice(0,2) }}</p>
        </swiper-slide>
        <div class="swiper-button-next">다음</div>
      </swiper>
      <div class="btn-wrap" v-if="gameList.length === (activeIndex + 1)">
        <g-button @click="setGameStart">이어서 게임 시작하기</g-button>
        <g-button :is-gray="true" @click="goHome">처음으로</g-button>
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
  name: 'talk',
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
      questionCount,
      gameList,
      swiperOptions,
      isTimerStart,
      activeIndex,
      slideChange,
      setDelay,
    } = gameSetting();

    const data = reactive({

    })

    onMounted(() => {
      setTimeout(() => {
        setDelay(countSpeed.value);
      })
    })

    const methods = {
      setGameStart() {
        root.$swal({
          showCancelButton: true,
          customClass: {
            container: 'modal_container is_cancelBtn',
          },
          confirmButtonText: '예',
          title: 'Next Game Start 👉',
        }).then(async (result) => {
          if (result.isConfirmed) {
            game.setGameStart({ subject: subject.value.value, questionCount: questionCount.value });
            swiper.value.$swiper.slideTo(0);
            setDelay(countSpeed.value);
          }
        });
      },
      goHome() {
        root.$swal({
          showCancelButton: true,
          customClass: {
            container: 'modal_container is_cancelBtn',
          },
          confirmButtonText: '예',
          title: '처음으로 이동하시겠습니까?',
        }).then(async (result) => {
          if (result.isConfirmed) window.location.href = '/game';
        });
      }
    }

    return {
      swiper,
      gameType,
      subject,
      countSpeed,
      questionCount,
      gameList,
      swiperOptions,
      isTimerStart,
      activeIndex,
      timer,
      setDelay,
      slideChange,
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
  bottom: $safeBottomHeight;
  right: 0;
  z-index: 1;
  display: flex;
  button {
    + button {
      margin-left: 10px;
    }
  }
}
</style>
