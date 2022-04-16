<template>
  <div class="detail-wrap">
    <header>
      <a href="/game" class="btn__home">home</a>
      <h1>{{ mainInfo.title }}</h1>
    </header>
    <template v-if="!isGameStart">
      <div class="contents">
        <h2>주제 <span v-if="subject.label">({{ subject.label }})</span></h2>
        <div class="btn-wrap">
          <g-button v-for="(option, index) in mainInfo.subject"
                    :is-gray="true"
                    :key="`subject_${index}`"
                    @click="setSubject(option.value, option.label)">{{ option.label }}</g-button>
        </div>
      </div>
      <div class="contents">
        <h2>문제 갯수 <span v-if="questionCount">({{ questionCount }}개)</span></h2>
        <div class="btn-wrap">
          <g-button v-for="(option, index) in questionNumberList"
                    :is-gray="true"
                    :key="`question_${index}`"
                    @click="setQuestionCount(option.value)">{{ option.label }}</g-button>
        </div>
      </div>
      <div class="contents">
        <h2>카운트 숫자
          <span v-if="countDownList.find((option) => option.value === countDown)">
          ({{ countDownList.find((option) => option.value === countDown).label }})
        </span>
        </h2>
        <div class="btn-wrap">
          <g-button v-for="(option, index) in countDownList"
                    :is-gray="true"
                    :key="`delay_${index}`"
                    @click="setCountDown(option.value)">{{ option.label }}</g-button>
        </div>
      </div>
      <div class="contents">
        <h2>카운트 속도
          <span v-if="countSpeedList.find((option) => option.value === countSpeed)">
          ({{ countSpeedList.find((option) => option.value === countSpeed).label }})
        </span>
        </h2>
        <div class="btn-wrap">
          <g-button v-for="(option, index) in countSpeedList"
                    :is-gray="true"
                    :key="`delay_${index}`"
                    @click="setCountSpeed(option.value)">{{ option.label }}</g-button>
        </div>
        <g-timer ref="timer"></g-timer>
      </div>
      <div class="footer-btn">
        <g-button :is-block="true" @click="setGameStart">게임 시작하기</g-button>
      </div>
    </template>
    <template v-else>
      <div class="contents">
        <complete></complete>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import GTimer from '~/components/_atoms/GTimer.vue';
import GButton from '~/components/_atoms/GButton.vue';
import gameSetting from '~/composable/gameSetting';
import complete from '~/components/game/complete.vue';

export default defineComponent({
  name: 'Complete',
  components: {
    GTimer,
    GButton,
    complete,
  },
  setup(props, { root }) {
    const {
      timer,
      game,
      speed,
      questionCount,
      gameType,
      mainInfo,
      countSpeed,
      countDown,
      isGameStart,
      isTimerStart,
      subject,
      countSpeedList,
      countDownList,
      questionNumberList,
      setCountSpeed,
      setCountDown,
      setSubject,
      setQuestionCount,
    } = gameSetting();

    const methods = {
      setGameStart() {
        if (isTimerStart.value) return false;

        if (!subject.value.value) {
          root.$swal('주제를 선택해주세요');
          return false;
        }
        if (!questionCount.value) {
          root.$swal('문제 갯수를 선택해주세요');
          return false;
        }
        if (!speed.value) {
          root.$swal('속도를 선택해주세요');
          return false;
        }
        root.$swal('Game Start 😆').then(() => {
          game.setTalkStart({ subject: subject.value.value, questionCount: questionCount.value });
        });
      }
    }

    return {
      setCountSpeed,
      setSubject,
      setQuestionCount,
      setCountDown,
      timer,
      speed,
      questionCount,
      gameType,
      mainInfo,
      countSpeed,
      countDown,
      isGameStart,
      isTimerStart,
      subject,
      countSpeedList,
      countDownList,
      questionNumberList,
      ...methods,
    }
  }
})
</script>

<style lang="scss" scoped>
.detail-wrap {
  margin-bottom: 100px;
}
header {
  text-align: center;
  background-color: #fff;
  position: relative;
  padding: 10px;

  h1 {
    font-size: 1.5em;
    font-weight: 400;
  }

  .btn__home {
    position: absolute;
    top: 50%;
    left: 10px;
    @include transform(translateY(-50%));
    width: 38px; height: 38px;
    background: $ic-30-common-arrow-left center no-repeat;
    text-indent: -9999em;
    overflow: hidden;
  }
}

.contents {
  padding: 20px;

  h2 {
    font-weight: 400;
    font-size: 1.2em;
    margin-bottom: 20px;

    span {
      display: inline-block;
      color: #aaa;
      font-size: .8em;
    }
  }

  .btn-wrap {
    margin: 0 0 0 -10px;
  }
  button {
    margin: 0 0 10px 10px;
  }
}

.footer-btn {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 20px 20px calc(#{$safeBottomHeight} + 20px);
}
</style>
