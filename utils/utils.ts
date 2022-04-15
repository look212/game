import { proverbList, idiomList, fourLetterVocabList, animalList, movieList, singerList, musicList, stuffList, emotionList, celebrityList, applianceList, scriptList, classicList, animationList } from '~/dummy/data';

/**
 * 문제 주제 선택 후 전체 목록 가져오기
 * @param subject
 */
export const setTotalList = (subject: any) => {
  let totalList: any = [];
  switch (subject) {
    case 'proverb':
      totalList = proverbList
      break;
    case 'idiom':
      totalList = idiomList
      break;
    case 'fourLetterVocab':
      totalList = fourLetterVocabList
      break;
    case 'animal':
      totalList = animalList
      break;
    case 'movie':
      totalList = movieList
      break;
    case 'singer':
      totalList = singerList
      break;
    case 'music':
      totalList = musicList
      break;
    case 'stuff':
      totalList = stuffList
      break;
    case 'emotion':
      totalList = emotionList
      break;
    case 'celebrity':
      totalList = celebrityList
      break;
    case 'appliance':
      totalList = applianceList
      break;
    case 'script':
      totalList = scriptList
      break;
    case 'classic':
      totalList = classicList
      break;
    case 'animation':
      totalList = animationList
      break;
  }

  return { totalList };
}

/**
 * 연속 호출 방지
 */
export const saveGuard = (() => {
  let busy = false;
  let timeout = null;
  return {
    setGuard: () => {
      busy = true;
      timeout = setTimeout(() => {
        busy = false;
      }, 1000);
    },
    isBusy: () => {
      return busy;
    }
  }
})();
