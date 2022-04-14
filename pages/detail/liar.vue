<template>
  <div>
    <header>
      <a href="/game" class="btn__home">home</a>
      <h1>{{ mainInfo.title }}</h1>
    </header>
    <template>
      <div class="contents">
        <h2>주제 <span v-if="subject.label">({{ subject.label }})</span></h2>
        <div class="btn-wrap">
          <g-button v-for="(subject, index) in mainInfo.subject"
                    :is-gray="true"
                    :key="`subject_${index}`"
                    @click="setSubject(subject.value, subject.label)">{{ subject.label }}</g-button>
        </div>
      </div>
      <div class="contents">
        <h2>속도
          <span v-if="delayList.find((delay) => delay.delay === timerDelay)">
          ({{ delayList.find((delay) => delay.delay === timerDelay).display_delay }})
        </span>
        </h2>
        <div class="btn-wrap">
          <g-button v-for="(delay, index) in delayList"
                    :is-gray="true"
                    :key="`delay_${index}`"
                    @click="setDelay(delay.delay)">{{ delay.display_delay }}</g-button>
        </div>
        <g-timer ref="Timer" :delay="delay"></g-timer>
      </div>
      <div class="contents">
        <h2>문제 갯수 <span v-if="questionCount">({{ questionCount }})</span></h2>
        <div class="btn-wrap">
          <g-button v-for="(question, index) in questionNumberList"
                    :is-gray="true"
                    :key="`question_${index}`"
                    @click="setQuestionCount(question.value)">{{ question.label }}</g-button>
        </div>
      </div>
      <div class="footer-btn">
        <g-button :is-block="true" @click="setGameStart">게임 시작하기</g-button>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, useRoute, ref, reactive, toRefs } from '@nuxtjs/composition-api';
import { useGameStore } from '~/store';
import GTimer from '~/components/_atoms/GTimer.vue';
import GButton from '~/components/_atoms/GButton.vue';
import { delayList, questionNumberList } from '~/constants';

export default defineComponent({
  name: 'Liar',
  components: {
    GTimer,
    GButton,
  },
  setup(props, { root }) {
    const game = useGameStore();
    const gameType = computed(() => game.gameType);
    const mainInfo = computed(() => game.mainInfo);
    const subject = computed(() => game.subject);
    const timerDelay = computed(() => game.timerDelay);
    const questionCount = computed(() => game.questionCount);
    const gameStart = computed(() => game.gameStart);
    const route = useRoute();
    const Timer = ref();
    const data = reactive({
      delay: 0,
      isStart: false,
      subjectVal: subject.value.value,
      questionCount,
      gameType,
      mainInfo,
      timerDelay,
      gameStart,
      subject,
    })

    onMounted(() => {
      const type = route.value.name?.split('-')[1];
      if (type) {
        game.setGameType(type);
        game.setMainInfo(type);
      }
    });

    const methods = {
      setDelay(delay: number) {
        data.delay = delay;
        Timer.value.countDown();
        game.setTimerDelay(delay);
      },
      setSubject(value: string, label: string) {
        game.setSubject({ value, label });
      },
      setQuestionCount(value: number) {
        game.setQuestionCount(value);
      },
      setGameStart() {
        if (!subject.value.value) {
          root.$swal('주제를 선택해주세요');
          return false;
        }
        if (!data.delay) {
          root.$swal('속도를 선택해주세요');
          return false;
        }
        if (!questionCount.value) {
          root.$swal('문제 갯수를 선택해주세요');
          return false;
        }
        game.setGameStart();
      }
    }

    return {
      Timer,
      delayList,
      questionNumberList,
      ...toRefs(data),
      ...methods,
    }
  }
})
</script>

<style lang="scss" scoped>
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
  bottom: $safeBottomHeight;
  left: 0;
  padding: 20px;
}
</style>
