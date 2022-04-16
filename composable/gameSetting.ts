import { computed, onMounted, useRoute, ref, reactive, toRefs } from '@nuxtjs/composition-api';
import { delayList, questionNumberList, timeLimitList, liarModeList } from '~/constants';
import { useGameStore } from '~/store';

export default function gameSetting() {
  const game = useGameStore();
  const gameType = computed(() => game.gameType);
  const mainInfo = computed(() => game.mainInfo);
  const subject = computed(() => game.subject);
  const countSpeed = computed(() => game.countSpeed);
  const questionCount = computed(() => game.questionCount);
  const isGameStart = computed(() => game.isGameStart);
  const timeLimit = computed(() => game.timeLimit);
  const liarMode = computed(() => game.liarMode);
  const gameList = computed(() => game.gameList);
  const isTimerStart = computed(() => game.isTimerStart);
  const route = useRoute();
  const timer = ref();
  const swiper = ref();
  const data = reactive({
    speed: 0,
    questionCount,
    gameType,
    mainInfo,
    countSpeed,
    isGameStart,
    subject,
    timeLimit,
    liarMode,
    gameList,
    isTimerStart,
    activeIndex: 0,
    delayList,
    questionNumberList,
    timeLimitList,
    liarModeList,
    swiperOptions: {
      allowTouchMove: false,
      navigation: {
        nextEl: '.swiper-button-next'
      },
      effect: 'fade',
    }
  });

  onMounted(() => {
    const type = route.value.name?.split('-')[1];
    if (type) {
      game.setGameType(type);
      game.setMainInfo(type);
    }
  });

  const methods = {
    async setCountSpeed(option: number) {
      data.speed = option;
      await timer.value.countDown(option);
      await game.setCountSpeed(option);
    },
    async setSubject(value: string, label: string) {
      await game.setSubject({ value, label });
    },
    async setQuestionCount(value: number) {
      await game.setQuestionCount(value);
    },
    async setTimeLimit(value: number) {
      await game.setTimeLimit(value);
    },
    async setLiarMode(value: string) {
      await game.setLiarMode(value);
    },
    async slideChange() {
      data.activeIndex = swiper.value.$swiper.activeIndex;
      await methods.setCountSpeed(countSpeed.value);
    },
  }

  return {
    timer,
    game,
    swiper,
    ...toRefs(data),
    ...methods,
  }
}
