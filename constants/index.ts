import { IMainInfo, ISimpleType } from '~/types';

export const mainInfos: IMainInfo[] = [
  {
    type: null,
    title: '게임을 선택해주세요😉',
    description: `
    <q>Copyright 2022. <a href="https://github.com/look212/" target="_blank">look212</a> all rights reserved.</q>
    `
  },
  {
    type: 'talk',
    title: '이어말하기',
    description: `
    <ul>
        <li>주제, 문제 갯수, 카운트 숫자, 카운트 속도를 고르세요.</li>
        <li>문제를 보고 문장 또는 단어를 완성하세요.</li>
    </ul>
    `,
    subject: [
      { value: 'proverb', label: '속담'},
      { value: 'idiom', label: '사자성어'},
      { value: 'fourLetterVocab', label: '4글자단어'},
    ]
  },
  {
    type: 'body',
    title: '몸으로 말해요',
    description: `
    <ul>
        <li>주제, 제한시간, 문제 갯수를 고르세요.</li>
        <li>문제를 보고 몸으로 설명하세요.</li>
        <li>답을 맞추세요.</li>
    </ul>
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
    <ul>
        <li>주제를 고르세요.</li>
        <li>모드를 고르세요.(일반, 스파이, 바보)</li>
        <li>라이어게임을 즐기세요.</li>
    </ul>
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
    <ul>
        <li>주제를 고르세요.</li>
        <li>사진 또는 그림을 보거나 노래를 듣고 문제를 맞추세요.</li>
    </ul>
    `,
    subject: [
      { value: 'singer', label: '가수'},
      { value: 'celebrity', label: '연예인'},
      { value: 'music', label: '노래'},
      { value: 'movie', label: '영화'},
      { value: 'script', label: '대사'},
      { value: 'classic', label: '클래식'},
      { value: 'random', label: '랜덤이미지'},
    ]
  },
]

export const countSpeedList: ISimpleType[] = [
  { value: 500, label: '0.5s'},
  { value: 700, label: '0.7s'},
  { value: 1000, label: '1s'},
]

export const questionNumberList: ISimpleType[] = [
  { value: 10, label: '10개'},
  { value: 20, label: '20개'},
  { value: 30, label: '30개'},
]

export const timeLimitList: ISimpleType[] = [
  { value: 1, label: '1분'},
  { value: 2, label: '2분'},
  { value: 3, label: '3분'},
]

export const liarModeList: ISimpleType[] = [
  { value: 'detault', label: '기본'},
  { value: 'spy', label: '스파이'},
  { value: 'fool', label: '바보'},
]

export const countDownList: ISimpleType[] = [
  { value: 3, label: '3'},
  { value: 4, label: '4'},
  { value: 5, label: '5'},
  { value: 6, label: '6'},
]
