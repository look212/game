import { Module, VuexModule, Mutation, MutationAction, Action } from 'vuex-module-decorators';
import { IMainInfo, ISimpleType } from '~/types';
import { mainInfos } from '~/constants';
import { setTotalList } from '~/utils/utils';
import Vue from 'vue';
import { $axios } from '~/utils/api';
import { AxiosResponse } from 'axios';

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
  liarMode: string = 'default'; // 라이어게임 모드;
  gameList: any = [];
  selectNumbers: any = [];
  totalNumbers: any = [];
  remainNumbers: any = [];
  giParams: any = [];
  searchImages: any = [];

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

  @Mutation
  setSearchImages(params: { url: string, index: number }){
    this.gameList[params.index].url = params.url;
  }

  @Mutation
  setSearchImagesReset() {
    this.gameList = [];
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
}
