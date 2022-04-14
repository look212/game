import { Module, VuexModule, MutationAction, Mutation } from 'vuex-module-decorators';
import { IMainInfo, ISubjectTypes } from '~/types';
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
  gameStart: boolean = false;
  subject: ISubjectTypes = { value: '', label: '' };
  questionCount: number = 0;

  @Mutation
  setGameType(gameType: string) {
    this.gameType = gameType
  }

  @Mutation
  setMainInfo(type: string) {
    const idx = mainInfos.findIndex((info:IMainInfo) => info.type === type)
    this.mainInfo = mainInfos[idx];
  }

  @Mutation
  setStartTimer(isStart: boolean) {
    this.isTimerStart = isStart
  }

  @Mutation
  setTimerDelay(delay: number) {
    this.timerDelay = delay;
  }

  @Mutation
  setSubject(params: { value: string, label: string }) {
    this.subject.value = params.value;
    this.subject.label = params.label;
  }

  @Mutation
  setQuestionCount(value: number) {
    this.questionCount = value
  }
  @Mutation
  setGameStart() {
    this.gameStart = true;
  }
}
