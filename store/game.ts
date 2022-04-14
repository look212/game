import { Module, VuexModule, MutationAction, Mutation } from 'vuex-module-decorators';
import { IMainInfo } from '~/types';
import { mainInfos } from '~/constants';

@Module({
  name: 'game',
  stateFactory: true,
  namespaced: true,
})

export default class Game extends VuexModule {
  gameType: number | null = null;
  mainInfo: IMainInfo = mainInfos[0];

  @Mutation
  setGameType(gameType: number) {
    this.gameType = gameType
  }

  @Mutation
  setMainInfo(type: number) {
    const idx = mainInfos.findIndex((info:IMainInfo) => info.type === type)
    this.mainInfo = mainInfos[idx];
  }
}
