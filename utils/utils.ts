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
  dramaList,
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
        return { value: music.music, singer: music.singer, youtube_id: music.youtube_id }
      })
      break;
    case 'singer':
      const arr = musicList.map((music) => {
        return { value: music.singer }
      })
      totalList = arr.filter((el: any, index: number) => {
        return arr.indexOf(el) === index;
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
      break;
    case 'food':
      totalList = foodList
      break;
    case 'drama':
      totalList = dramaList
      break;
    case 'movie_script':
      movieList.filter((option: any) => option.scriptList).map((option: any) => {
        option.scriptList.forEach((script: any) => {
          totalList.push({
            value: option.value,
            screenshot: script.screenshot,
            script: script.script,
          })
        })
      })
      break;
    case 'movie_title':
      movieList.filter((option: any) => option.scriptList).map((option: any) => {
        option.scriptList.forEach((script: any) => {
          totalList.push({
            value: option.value,
            screenshot: script.screenshot,
            script: script.script,
          })
        })
      });
      const filterMovie = movieList.filter((option: any) => option.screenshot)
      totalList.push(...filterMovie);
      break;
    case 'movie_sound':
      movieList.filter((option: any) => option.soundList).map((option: any) => {
        option.soundList.forEach((sound: any) => {
          totalList.push({
            value: option.value,
            singer: sound.singer,
            title: sound.title,
            youtube_id: sound.youtube_id,
          })
        })
      })
      break;
    case 'drama_script':
      dramaList.filter((option: any) => option.scriptList).map((option: any) => {
        option.scriptList.forEach((script: any) => {
          totalList.push({
            value: option.value,
            screenshot: script.screenshot,
            script: script.script,
          })
        })
      })
      break;
    case 'drama_title':
      dramaList.map((option: any) => {
        option.scriptList.forEach((script: any) => {
          totalList.push({
            value: option.value,
            screenshot: script.screenshot,
            script: script.script,
          })
        })
      });
      const filterDrama = dramaList.filter((option: any) => option.screenshot)
      totalList.push(...filterDrama);
      break;
    case 'drama_sound':
      dramaList.filter((option: any) => option.soundList).map((option: any) => {
        option.soundList.forEach((sound: any) => {
          totalList.push({
            value: option.value,
            singer: sound.singer,
            title: sound.title,
            youtube_id: sound.youtube_id,
          })
        })
      })
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

export const getRandom = ((min: number, max: number) => {
  return Math.floor((Math.random() * (max - min + 1)) + min);
})

export const getRandomArray = ((min: number, max: number, count: number) => {
  // 종료
  if (max - min + 1 < count) return;

  // 배열 생성
  var rst = [];

  while (1) {
    var index = getRandom(min, max);

    // 중복 여부를 체크
    if (rst.indexOf(index) > -1) {
      continue;
    }

    rst.push(index);

    // 원하는 배열 갯수가 되면 종료
    if (rst.length == count) {
      break;
    }
  }

  return rst;
  // 정렬
  // return rst.sort(function (a, b) {
  //   return a - b;
  // });
})
