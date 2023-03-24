import { IMainInfo, ISimpleType } from '~/types'

export const mainInfos: IMainInfo[] = [
  {
    type: null,
    title: '게임을 선택해주세요😉',
    description: `
    <q>Copyright 2022. <a href="https://github.com/look212/" target="_blank">look212</a> all rights reserved.</q>
    `,
  },
  {
    type: 'complete',
    title: '이어말하기',
    description: `
    <ul>
        <li>주제, 문제 갯수, 카운트 숫자, 카운트 속도를 고르세요.</li>
        <li>문제를 보고 문장 또는 단어를 완성하세요.</li>
        <li>동일한 제시어가 나오면 이전에 말한 것과 다른 것을 말해야합니다.</li>
    </ul>
    `,
    subject: [
      { value: 'proverb', label: '속담' },
      { value: 'idiom', label: '사자성어' },
      { value: 'fourLetterVocab', label: '4글자단어' },
    ],
  },
  {
    type: 'speed',
    title: '스피드게임',
    description: `
    <ul>
        <li>몸으로 말해요, 고요속의 외침</li>
        <li>주제, 문제 갯수를 고르세요.</li>
        <li>팀을 나눠 문제 내는 사람과 맞추는 사람을 정하세요.</li>
        <li>제한시간을 정하고 타이머를 맞추세요.</li>
        <li>답을 맞추세요.</li>
    </ul>
    `,
    subject: [
      { value: 'proverb', label: '속담' },
      { value: 'idiom', label: '사자성어' },
      { value: 'animal', label: '동물' },
      { value: 'movie', label: '영화' },
      { value: 'drama', label: '드라마' },
      { value: 'singer', label: '가수' },
      { value: 'music', label: '노래' },
      { value: 'stuff', label: '물건' },
      { value: 'emotion', label: '감정' },
      { value: 'food', label: '음식' },
    ],
  },
  {
    type: 'liar',
    title: '라이어게임',
    description: `
    <ul>
        <li>주제를 고르세요.</li>
        <li>모드를 고르세요.(기본, 스파이, 바보)
            <ul>
                <li>기본모드: 제시어를 모르는 라이어 1명</li>
                <li>스파이모드: 라이어 1명, 제시어 아는 스파이 1명</li>
                <li>바보모드: 다른 제시어를 받지만 스스로도 라이어인지 모르는 바보 1명</li>
            </ul>
        </li>
        <li>게임에 참여하는 인원을 입력하세요.</li>
        <li>라이어게임을 즐기세요.</li>
    </ul>
    `,
    subject: [
      { value: 'animal', label: '동물' },
      { value: 'music', label: '노래' },
      { value: 'movie', label: '영화' },
      { value: 'drama', label: '드라마' },
      { value: 'stuff', label: '물건' },
      { value: 'photo', label: '인물' },
      { value: 'appliance', label: '전자제품' },
      { value: 'food', label: '음식' },
    ],
  },
  {
    type: 'photo',
    title: '인물게임',
    description: `
    <ul>
        <li>문제 갯수를 고르세요.</li>
        <li>사진 또는 그림을 보고 문제를 맞추세요.</li>
    </ul>
    `,
  },
  {
    type: 'music',
    title: '노래 맞추기',
    description: `
    <ul>
        <li>주제를 고르세요.</li>
        <li>문제 갯수를 고르세요.</li>
        <li>노래를 듣고 맞추세요.</li>
    </ul>
    `,
    subject: [
      { value: 'music', label: '가요' },
      { value: 'classic', label: '클래식' },
    ],
  },
  {
    type: 'movie',
    title: '영화 맞추기',
    description: `
    <ul>
        <li>문제 유형을 고르세요.</li>
        <li>문제 갯수를 고르세요.</li>
        <li>답을 맞추세요.</li>
    </ul>
    `,
    subject: [
      { value: 'movie_script', label: '스샷보고 대사 맞추기' },
      { value: 'movie', label: '스샷보고 제목 맞추기' },
      { value: 'movie_sound', label: 'OST 듣고 제목 맞추기' },
    ],
  },
  {
    type: 'drama',
    title: '드라마 맞추기',
    description: `
    <ul>
        <li>문제 유형을 고르세요.</li>
        <li>문제 갯수를 고르세요.</li>
        <li>답을 맞추세요.</li>
    </ul>
    `,
    subject: [
      { value: 'drama_title', label: '스샷보고 제목 맞추기' },
      { value: 'drama_sound', label: 'OST 듣고 제목 맞추기' },
    ],
  },
  {
    type: 'bingo',
    title: 'BINGO',
    description: `
    1~ 25 사이의 숫자로 빙고판이 랜덤으로 설정됩니다.
    `,
  },
  {
    type: 'chosung',
    title: '초성 게임',
    description: `
    <ul>
        <li>문제 유형을 고르세요.</li>
        <li>문제 갯수를 고르세요.</li>
        <li>답을 맞추세요.</li>
    </ul>
    `,
    subject: [
      { value: 'drama_chosung', label: '드라마' },
      { value: 'movie_chosung', label: '영화' },
      { value: 'singer_chosung', label: '가수' },
      { value: 'music_chosung', label: '노래' },
      { value: 'proverb_chosung', label: '속담' },
    ],
  },
  {
    type: 'melody',
    title: '절대음감',
    description: `제시어를 일정한 규칙에 따라 가장 빨리 발음하는 팀이 이기는 게임<br><br>
    ex) "모~↗나리자 모나~↗리자 모나리~↗자 모나리자~↗"
    `,
  },
  {
    type: 'mix',
    title: '노래 믹스 퀴즈',
    description: `
    <ul>
        <li>(안드로이드, 웹에서만 동작합니다)</li>
        <li>노래 몇 개를 믹스할지 고르세요</li>
        <li>문제 갯수를 고르세요.</li>
        <li>믹스된 노래를 맞추세요.</li>
    </ul>
    `,
  },
]

export const countSpeedList: ISimpleType[] = [
  { value: 500, label: '0.5s' },
  { value: 700, label: '0.7s' },
  { value: 1000, label: '1s' },
]

export const questionNumberList: ISimpleType[] = [
  { value: 10, label: '10개' },
  { value: 20, label: '20개' },
  { value: 30, label: '30개' },
]

export const liarModeList: ISimpleType[] = [
  { value: 'detault', label: '기본' },
  { value: 'spy', label: '스파이' },
  { value: 'fool', label: '바보' },
]

export const countDownList: ISimpleType[] = [
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
]

export const mixedList: ISimpleType[] = [
  { value: 2, label: '2개' },
  { value: 3, label: '3개' },
  { value: 4, label: '4개' },
  { value: 5, label: '5개' },
]
