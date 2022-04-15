import { computed, onMounted, useRoute, ref, reactive, toRefs } from '@nuxtjs/composition-api';
import { delayList, questionNumberList, timeLimitList, liarModeList } from '~/constants';
import { useGameStore } from '~/store';

export default function gameSetting() {
  const game = useGameStore();
  const gameType = computed(() => game.gameType);
  const mainInfo = computed(() => game.mainInfo);
  const subject = computed(() => game.subject);
  const timerDelay = computed(() => game.timerDelay);
  const questionCount = computed(() => game.questionCount);
  const isGameStart = computed(() => game.isGameStart);
  const timeLimit = computed(() => game.timeLimit);
  const liarMode = computed(() => game.liarMode);
  const route = useRoute();
  const timer = ref();
  const data = reactive({
    delay: 0,
    questionCount,
    gameType,
    mainInfo,
    timerDelay,
    isGameStart,
    subject,
    timeLimit,
    liarMode,
    delayList,
    questionNumberList,
    timeLimitList,
    liarModeList,
  });

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
      setTimeout(() => {
        timer.value.countDown();
      })
      game.setTimerDelay(delay);
    },
    setSubject(value: string, label: string) {
      game.setSubject({ value, label });
    },
    setQuestionCount(value: number) {
      game.setQuestionCount(value);
    },
    setTimeLimit(value: number) {
      game.setTimeLimit(value);
    },
    setLiarMode(value: string) {
      game.setLiarMode(value);
    }
  }

  return {
    timer,
    game,
    ...toRefs(data),
    ...methods,
  }
}
