import { IMainInfo, IDelayTime, ISubjectTypes, IQuestionNumberTypes } from '~/types';

export const mainInfos: IMainInfo[] = [
  {
    type: null,
    title: '게임을 선택해주세요😉',
  },
  {
    type: 'talk',
    title: '이어말하기',
    description: `
    1. 주제를 고르세요.<br>
    2. 문제를 보고 문장 또는 단어를 완성하세요.
    `,
    subject: [
      { value: 'proverb', label: '속담'},
      { value: 'idiom', label: '사자성어'},
      { value: 'fourLetterVocal', label: '4글자단어'},
    ]
  },
  {
    type: 'body',
    title: '몸으로 말해요',
    description: `
    1. 주제를 고르세요.<br>
    2. 문제를 보고 몸으로 설명하세요.<br>
    3. 답을 맞추세요.
    `,
    subject: [
      { value: 'proverb', label: '속담'},
      { value: 'idiom', label: '사자성어'},
      { value: 'animal', label: '동물'},
      { value: 'movie', label: '영화'},
      { value: 'singer', label: '가수'},
      { value: 'music', label: '노래'},
      { value: 'stuff', label: '물건'},
      { value: 'emotion', label: '감정'},
    ]
  },
  {
    type: 'liar',
    title: '라이어게임',
    description: `
    1. 주제를 고르세요.<br>
    2. 모드를 고르세요.(일반, 스파이, 바보)<br>
    3. 라이어게임을 즐기세요.
    `,
    subject: [
      { value: 'animal', label: '동물'},
      { value: 'singer', label: '가수'},
      { value: 'music', label: '노래'},
      { value: 'movie', label: '영화'},
      { value: 'stuff', label: '물건'},
      { value: 'celebrity', label: '연예인'},
      { value: 'appliance', label: '전자제품'},
    ]
  },
  {
    type: 'fit',
    title: '맞추기',
    description: `
    1. 주제를 고르세요.<br>
    2. 사진 또는 그림을 보거나 노래를 듣고 문제를 맞추세요<br>
    `,
    subject: [
      { value: 'singer', label: '가수'},
      { value: 'celebrity', label: '연예인'},
      { value: 'music', label: '노래'},
      { value: 'movie', label: '영화'},
      { value: 'script', label: '대사'},
      { value: 'classic', label: '클래식'},
    ]
  },
]

export const delayList: IDelayTime[] = [
  { delay: 500, display_delay: '0.5s'},
  { delay: 700, display_delay: '0.7s'},
  { delay: 1000, display_delay: '1s'},
]

export const questionNumberList: IQuestionNumberTypes[] = [
  { value: 10, label: '10개'},
  { value: 20, label: '20개'},
  { value: 30, label: '30개'},
]
