<template>
  <div class="game-in" v-if="gameList.length > 1">
    <div class="info">
      <p> {{ subject.label }} ({{ activeIndex + 1 }}/{{ questionCount }})</p>
    </div>
    <div class="controls" v-if="subject.value === 'drama_sound'">
      <g-button :is-gray="true"
                @click="handlePlay"
                :class="{'is-active': type === 'play'}"><img src="../../static/images/icon/play.png" alt="play" height="14px;">️</g-button>
      <g-button :is-gray="true"
                @click="handleStop"
                :class="{'is-active': type === 'stop'}"><img src="../../static/images/icon/stop.png" alt="stop" height="14px"></g-button>
    </div>
    <div class="question-wrap" @click="setIsShow(!isShow)">
      <swiper ref="swiper"
              class="custom"
              :options="swiperOptions">
        <swiper-slide v-for="(game, index) in gameList" :key="`game_${index}`">
          <div v-if="index === activeIndex">
            <div class="shadow" v-if="isShow && subject.value === 'drama_sound'">
              <p><span>{{ activeIndex + 1 }}</span><br>클릭하여 확인해주세요</p>
            </div>
            <template v-if="subject.value === 'drama_sound'">
              <p style="font-size: 1.2em; margin-bottom: 20px;">{{ game.value }}({{ game.singer }} {{ game.singer ? '-' : ''}} {{ game.title }})</p>
              <client-only>
                <youtube :video-id="game.youtube_id"
                         player-width="100%"
                         player-height="56.25%"
                         @ready="ready"
                         @playing="playing($event, type)"></youtube>
              </client-only>
            </template>
            <template v-else>
              <img :src="game.screenshot" alt="">
              <div class="txt">
                <div :class="{'is-active': !isShow}">
                  {{ game.value }}
                  <i v-if="subject.value === 'drama_script'">{{ game.script }}</i>
                </div>
              </div>
              <div class="swiper-lazy-preloader"></div>
            </template>
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
import { defineComponent, reactive, toRefs, onMounted, ref, watch } from '@nuxtjs/composition-api';
import gameSetting from '~/composable/gameSetting';
import GButton from '~/components/_atoms/GButton.vue';
import GTimer from '~/components/_atoms/GTimer.vue';

export default defineComponent({
  name: 'ComponentDrama',
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
      questionCount,
      gameList,
      swiperOptions,
      isTimerStart,
      activeIndex,
      isShow,
      nextSlide,
      setCountSpeed,
      setIsShow,
    } = gameSetting();
    const data = reactive({
      type: '',
      youtube: null
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
            isShow.value = true;
            activeIndex.value = 0;
            swiper.value.$swiper.slideTo(0);
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
      handlePlay() {
        if (data.type === 'play') {
          data.type = 'pause';
        } else {
          data.type = 'play';
        }
        methods.playing(data.youtube, data.type);
      },
      handleStop() {
        data.type = 'stop';
        methods.playing(data.youtube, data.type);
      },

      ready(event: any) {
        console.log(event)
        data.youtube = event;
      },
      playing(event: any, type: string) {
        if (type === 'play') event.target.playVideo();
        if (type === 'pause') event.target.pauseVideo();
        if (type === 'stop') event.target.stopVideo();
      },
    }

    watch(() => activeIndex.value, (newValue: number) => {
      data.type = 'pause';
    })

    return {
      swiper,
      gameType,
      subject,
      questionCount,
      gameList,
      swiperOptions,
      isTimerStart,
      activeIndex,
      timer,
      isShow,
      setCountSpeed,
      nextSlide,
      setIsShow,
      ...methods,
      ...toRefs(data),
    }
  }
})
</script>

<style lang="scss" scoped>
.controls {
  margin-top: 20px;
  text-align: center;
  position: relative;

  .is-active {
    background-color: $Gray00;
    border:1px solid $Gray90;
  }

  button {
    img {
      margin-top: -5px;
    }
  }
}
.swiper-slide {
  img {
    max-width: 90vw;
  }
  .txt {
    position: relative;
    font-size: 1.5em;
    width: 100%;
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
        opacity: .4;
        font-size: .8em;
      }

      &.is-active {
        color: $Gray90;
        &::before {
          content: '';
        }
      }
    }
  }
}
</style>
