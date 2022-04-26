import {
  proverbList,
  idiomList,
  fourLetterVocabList,
  animalList,
  movieList,
  musicList,
  stuffList,
  emotionList,
  applianceList,
  classicList,
  photoList,
  foodList,
} from '~/dummy/data';

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
    case 'music':
      totalList = musicList.map((music) => {
        return { value: music.music, youtube_id: music.youtube_id }
      })
      break;
    case 'singer':
      totalList = totalList = musicList.map((music) => {
        return { value: music.singer }
      })
      break;
    case 'stuff':
      totalList = stuffList
      break;
    case 'emotion':
      totalList = emotionList
      break;
    case 'appliance':
      totalList = applianceList
      break;
    case 'classic':
      totalList = classicList
      break;
    case 'photo':
      totalList = photoList
    case 'food':
      totalList = foodList
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
    setGuard: (option: number) => {
      busy = true;
      timeout = setTimeout(() => {
        busy = false;
      }, option);
    },
    isBusy: () => {
      return busy;
    }
  }
})();
