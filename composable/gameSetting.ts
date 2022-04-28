import { computed, onMounted, useRoute, ref, reactive, toRefs } from '@nuxtjs/composition-api';
import { countSpeedList, questionNumberList, liarModeList, countDownList } from '~/constants';
import { useGameStore, useAppStore } from '~/store';
import { saveGuard } from '~/utils/utils';
import { useContext } from '@nuxtjs/composition-api';
import Vue from 'vue';

export default function gameSetting() {
  const { $axios } = useContext();
  const game = useGameStore();
  const app = useAppStore();
  const gameType = computed(() => game.gameType);
  const mainInfo = computed(() => game.mainInfo);
  const subject = computed(() => game.subject);
  const countSpeed = computed(() => game.countSpeed);
  const countDown = computed(() => game.countDown);
  const questionCount = computed(() => game.questionCount);
  const isGameStart = computed(() => game.isGameStart);
  const liarMode = computed(() => game.liarMode);
  const gameList = computed(() => game.gameList);
  const isTimerStart = computed(() => game.isTimerStart);
  const giParams = computed(() => game.giParams);
  const participants = computed(() => game.participants);
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
    liarMode,
    gameList,
    isTimerStart,
    giParams,
    participants,
    isShow: true,
    activeIndex: 0,
    countSpeedList,
    questionNumberList,
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
    async setLiarMode(value: string) {
      await game.setLiarMode(value);
    },
    async nextSlide() {
      if (isTimerStart.value) return false;
      if (gameType.value === 'liar' && data.isShow) {
        Vue.swal('확인 후 다음을 눌러주세요.');
        return false;
      }
      await swiper.value.$swiper.slideNext();
      data.isShow = true;
      data.activeIndex = swiper.value.$swiper.activeIndex;
      console.log(data.activeIndex);
      if (gameType.value === 'photo') await methods.setGoogleImage(gameList.value[data.activeIndex].value);
      if (gameType.value === 'complete' || gameType.value === 'photo') await methods.setCountSpeed(countSpeed.value);
    },
    async setKakaoImage(params: string) {
      console.log(params);
      await $axios.get(
        `https://dapi.kakao.com/v2/search/image?query=${gameList.value[data.activeIndex].value}&size=1`, {
          headers: {
            'Authorization': 'KakaoAK f34e842e06dda695d94790ca99ac845d'
          }
        }
      ).then((response: any) => {
        console.log('kakao image:::', response.data.documents[0].image_url)
        game.setSearchImages({ url: response.data.documents[0].image_url, index: data.activeIndex });
      });
    },
    async setGoogleImage(params: string) {
      console.log(params);
      game.setGoogleImagesParams(params);
      const { key, cx, searchType, num, q } = giParams.value;
      try {
        await $axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&searchType=${searchType}&num=${num}&q=${encodeURIComponent(q)}&c2coff=1&cr=ko&gl=ko&imgType=face&lr=lang_ko`).then(async (response: any) => {
          console.log('google image:::', response.data.items[0].link)
          game.setSearchImages({ url: response.data.items[0].link, index: data.activeIndex });
        })
      } catch (e: any) {
        await methods.setKakaoImage(gameList.value[data.activeIndex].value);
      }
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
