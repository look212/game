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
    delay: 0,
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
    setDelay(delay: number) {
      data.delay = delay;
      setTimeout(() => {
        timer.value.countDown(delay);
      })
      game.setCountSpeed(delay);
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
    },
    slideChange(total: number) {
      data.activeIndex = swiper.value.$swiper.activeIndex;
    },
    async nextSlide() {
      await swiper.value.$swiper.slideNext();
      await methods.setDelay(countSpeed.value);
    }
  }

  return {
    timer,
    game,
    swiper,
    ...toRefs(data),
    ...methods,
  }
}
