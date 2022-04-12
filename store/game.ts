import { Module, VuexModule, MutationAction } from 'vuex-module-decorators';

@Module({
  name: 'game',
  stateFactory: true,
  namespaced: true,
})

export default class Game extends VuexModule {

}
