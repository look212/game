import { computed, onMounted, useRoute, ref, reactive, toRefs } from '@nuxtjs/composition-api';
import { countSpeedList, questionNumberList, timeLimitList, liarModeList, countDownList } from '~/constants';
import { useGameStore } from '~/store';
import { saveGuard } from '~/utils/utils';

export default function gameSetting() {
  const game = useGameStore();
  const gameType = computed(() => game.gameType);
  const mainInfo = computed(() => game.mainInfo);
  const subject = computed(() => game.subject);
  const countSpeed = computed(() => game.countSpeed);
  const countDown = computed(() => game.countDown);
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
    countDown,
    isGameStart,
    subject,
    timeLimit,
    liarMode,
    gameList,
    isTimerStart,
    activeIndex: 0,
    countSpeedList,
    questionNumberList,
    timeLimitList,
    liarModeList,
    countDownList,
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
      // 연속 호출 방지
      if (saveGuard.isBusy()) { return; } else { saveGuard.setGuard(option * countDown.value); }

      data.speed = option;
      await timer.value.countDown(option);
      await game.setCountSpeed(option);
    },
    async setCountDown(option: number) {
      await game.setCountDown(option);
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
    async nextSlide() {
      if (isTimerStart.value) return false;
      await swiper.value.$swiper.slideNext();
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
