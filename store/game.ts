import { Module, VuexModule, Mutation, MutationAction, Action } from 'vuex-module-decorators';
import { IMainInfo, ISimpleType } from '~/types';
import { mainInfos } from '~/constants';
import { setTotalList } from '~/utils/utils';
import Vue from 'vue';
import { $axios } from '~/utils/api';

@Module({
  name: 'game',
  stateFactory: true,
  namespaced: true,
})

export default class Game extends VuexModule {
  gameType: string | null = null; // 게임 종류
  mainInfo: IMainInfo = mainInfos[0];
  isTimerStart: boolean = false;
  countDown: number = 3; // 카운트다운
  countSpeed: number = 0; // 카운트 속도
  isGameStart: boolean = false;
  subject: ISimpleType = { value: '', label: '' }; // 주제
  questionCount: number = 0; // 문제 개수
  timeLimit: number = 0; // 제한 시간
  liarMode: string = 'default'; // 라이어게임 모드;
  gameList: any = [];
  selectNumbers: any = [];
  totalNumbers: any = [];
  remainNumbers: any = [];
  giParams: any = [];
  googleImages: any = [];

  @Mutation
  setIsGameStart() {
    this.isGameStart = true;
  }

  @Mutation
  setGameType(option: string) {
    this.gameType = option
  }

  @Mutation
  setMainInfo(option: string) {
    const idx = mainInfos.findIndex((info:IMainInfo) => info.type === option)
    this.mainInfo = mainInfos[idx];
  }

  @Mutation
  setStartTimer(option: boolean) {
    this.isTimerStart = option
  }

  @Mutation
  setCountSpeed(option: number) {
    this.countSpeed = option;
  }

  @Mutation
  setCountDown(option: number) {
    this.countDown = option;
  }

  @Mutation
  setSubject(params: { value: string, label: string }) {
    this.subject.value = params.value;
    this.subject.label = params.label;
  }

  @Mutation
  setQuestionCount(option: number) {
    this.questionCount = option
  }

  @Mutation
  setTimeLimit(option: number) {
    this.timeLimit = option;
  }

  @Mutation
  setLiarMode(option: string) {
    this.liarMode = option;
  }

  /**
   * 이어말하기 게임 시작
   * @param subject
   * @param questionCount
   */
  @Mutation
  async setGameStart(params: { subject: any, questionCount?: number }) {
    const { subject, questionCount } = params;
    this.isGameStart = true;
    let totalList = setTotalList(subject).totalList;
    console.log('totalList:::', totalList);
    let totalLength = totalList.length;
    this.totalNumbers = [];
    this.selectNumbers = [];
    this.gameList = [];

    // 선택된 주제 전체 숫자 배열
    for (let j = 0; j < totalLength; j++) {
      this.totalNumbers.push(j);
    }

    if (this.remainNumbers.length === 0) {
      this.remainNumbers = this.totalNumbers;
    }

    let remainLength = this.remainNumbers.length;

    if (questionCount && questionCount > remainLength) {
      Vue.swal({
        title: '처음으로 이동하시겠습니까?',
        html: '남아있는 문제 수가 적어 게임을 이어서할 수 없습니다.'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/game';
        }
      });

      return false;
    }

    // 문제 갯수만큼의 랜덤 선택 숫자 배열
    if (questionCount && this.selectNumbers.length < questionCount) {
      for (let i = 0; i < questionCount; i++) {
        const newNumb = Math.floor(Math.random() * remainLength + 1);
        if (!this.selectNumbers.find((num: any) => num === this.remainNumbers[newNumb])) {
          this.selectNumbers.push(this.remainNumbers[newNumb]);
        }
        else i--;
      }
    }

    // 남아있는 숫자 배열 = 전체 숫자 배열 - 선택 숫자 배열
    this.selectNumbers.reduce((acc: number, cur: number) => {
      this.remainNumbers = this.remainNumbers.filter((num: number) => num !== acc);
      this.remainNumbers = this.remainNumbers.filter((num: number) => num !== cur);
    });

    this.selectNumbers.forEach((num: number) => {
      this.gameList.push(totalList[num]);
    });
  }

  @Action
  async getGoogleImageSearch(param: string) {
    console.log(param);
    this.setGoogleImagesParams(param);
    const { key, cx, searchType, num, q } = this.giParams;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&searchType=${searchType}&num=${num}&q=${encodeURIComponent(q)}&c2coff=1&cr=ko&gl=ko&imgType=face&lr=lang_ko`, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            this.setGoogleImages(response);
            resolve(response);
          } else {
            if (xhr.status === 429) Vue.swal({
              title: '처음으로 이동하시겠습니까?',
              html: 'google api 조회 할당량이 초과되어 게임을 진행할 수 없습니다.'
            }).then(() => window.location.href = '/game');
            reject();
          }
        } else {
          reject();
        }
      }
      xhr.send();
    })
  }

  @Mutation
  setGoogleImages(param: any){
    if (param === null) {
      this.googleImages = [];
    } else {
      this.googleImages.push(param.items[0].link);
    }
  }

  @Mutation
  setGoogleImagesParams(param: string) {
    this.giParams = {
      key: 'AIzaSyDUb83T2nPDoylcZudPoGo28JufTvftFhc',
      cx: '1ed3b086a03fc3e3e',
      searchType: 'image',
      num: 1,
      q: param,
    }
  }

  @Action
  async getKakaoImageSearch(param: string) {
    console.log(param);
    const kakaoImage = await $axios.get(`https://dapi.kakao.com/v2/search/image?query=${param}&size=1`, { headers: {
        'Authorization': 'KakaoAK f34e842e06dda695d94790ca99ac845d'
      } });
    console.log(kakaoImage);
    return { kakaoImage }

    // return new Promise((resolve, reject) => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.open('GET', `https://dapi.kakao.com/v2/search/image?query=${param}&size=1`, true);
    //   xhr.onreadystatechange = () => {
    //     const response = JSON.parse(xhr.response);
    //     console.log(response);
    //   }
    //   xhr.send();
    // })
  }
}
