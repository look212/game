import { Module, VuexModule, MutationAction, Mutation } from 'vuex-module-decorators';
import { IMainInfo, ISimpleType } from '~/types';
import { mainInfos } from '~/constants';

@Module({
  name: 'game',
  stateFactory: true,
  namespaced: true,
})

export default class Game extends VuexModule {
  gameType: string | null = null;
  mainInfo: IMainInfo = mainInfos[0];
  isTimerStart: boolean = false;
  timerDelay: number = 0;
  isGameStart: boolean = false;
  subject: ISimpleType = { value: '', label: '' };
  questionCount: number = 0;
  timeLimit: number = 0;
  liarMode: string = 'default';

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
  setTimerDelay(option: number) {
    this.timerDelay = option;
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
  setGameStart() {
    this.isGameStart = true;
  }

  @Mutation
  setTimeLimit(option: number) {
    this.timeLimit = option;
  }

  @Mutation
  setLiarMode(option: string) {
    this.liarMode = option;
  }
}
